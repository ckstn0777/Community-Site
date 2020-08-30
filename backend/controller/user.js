require("dotenv").config();

const bcrypt = require("bcrypt");
const database = require("../database");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const captcha = require("../middleware/captcha-auth");

// 암호화 프로미스화
const doBcrypt = (password, saltRounds) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) {
        reject(err);
      }
      resolve(hash);
    });
  });
};

// 이메일 인증 토큰 생성
const doEmailKey = (req, mode) => {
  return new Promise((resolve, reject) => {
    var key_one = crypto.randomBytes(256).toString("hex").substr(100, 5);
    var key_two = crypto.randomBytes(256).toString("base64").substr(50, 5);
    var key_for_verify = key_one + key_two;

    var url;
    let mailOption;
    let email;

    if (mode === "userSignup") {
      url =
        process.env.URL +
        ":" +
        process.env.PORT +
        "/api/user/confirmEmail" +
        "?email=" +
        req.body.email +
        "&key=" +
        key_for_verify;

      email = req.body.email;

      mailOption = {
        from: "ckstn0778@gmail.com",
        to: email,
        subject: "개발자 커뮤니티 인증 이메일입니다.",
        html: "<h1>이메일 인증을 위해 아래 URL을 클릭해주세요</h1><br>" + url,
      };
    } else if (mode === "passwordReset") {
      url =
        process.env.URL +
        ":" +
        process.env.PORT +
        "/api/user/emailConfirm" +
        "?email=" +
        req.query.email +
        "&key=" +
        key_for_verify;

      email = req.query.email;

      mailOption = {
        from: "ckstn0778@gmail.com",
        to: email,
        subject: "개발자 커뮤니티 비밀번호 초기화 이메일입니다.",
        html:
          "<h1>비밀번호 최기화를 위해 아래 URL을 클릭해주세요</h1><br>" + url,
      };
    }

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      service: "gamil",
      auth: {
        user: "ckstn0778@gmail.com",
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    transporter.sendMail(mailOption, function (err, info) {
      if (err) {
        reject(err);
      } else {
        resolve(key_for_verify);
      }

      transporter.close();
    });
  });
};

exports.userLogin = async (req, res, next) => {
  try {
    const auth = await captcha(req, res);

    if (JSON.parse(auth).score > 0.5) {
      let sql = "select * from authors where email=?";
      let data = [req.body.email];

      const conn = await database.getConnection();
      const user = await database.query(conn, sql, data);

      // 존재하는 유저가 없는 경우
      if (!user[0]) {
        throw new Error("Invalid authentication credentials!");
      }
      // 비밀번호 비교
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        // 비동기 방식에서 에러처리를 하려면 다시 안에다가 try~catch를 해줘야한다
        // 이는 callback function이 try~catch scope를 벗어나기 때문이라는데...?
        // 아무튼 이렇게 안해주면 process가 exit되버리는 문제가 발생한다.
        try {
          if (!result) {
            throw new Error("Invalid authentication credentials!");
          }

          //json web token 생성
          const token = jwt.sign(
            { email: user[0].email, nickname: user[0].nickname },
            process.env.JWT_KEY,
            { expiresIn: "1h" }
          );

          res.status(200).json({
            token: token,
            expiresIn: 3600,
            userId: user[0].email,
            nickname: user[0].nickname,
            avatar: user[0].avatar,
          });
        } catch (err) {
          console.log(err);
          res.status(500).json({
            message: "Invalid authentication credentials!",
          });
        }
      });
    } else {
      // 메크로라고 판단
      throw new Error("I recognized it as a macro.");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Invalid authentication credentials!",
    });
  }
};

// 회원가입 컨트롤러
exports.userSignup = async (req, res) => {
  try {
    const auth = await captcha(req, res);

    if (JSON.parse(auth).score > 0.5) {
      // 1단게. 이미 존재하는 이메일과 닉네임 - authors 테이블에서 확인 필요
      let sql = "select * from authors where email=?";
      let conn = await database.getConnection();
      let result = await database.query(conn, sql, [req.body.email]);

      if (result.length !== 0) {
        throw new Error("Email already existed!!");
      }

      sql = "select * from authors where nickname=?";
      conn = await database.getConnection();
      result = await database.query(conn, sql, [req.body.nickName]);

      if (result.length !== 0) {
        throw new Error("nickname already existed!!");
      }

      // 2단계. 토큰 생성
      const key = await doEmailKey(req, "userSignup");

      const user = {};
      const avatarUrl =
        process.env.URL + ":" + process.env.PORT + "/images/avatar/user.jpg"; // 수정필요합니다~~!!
      user.avatar = avatarUrl;
      user.password = await doBcrypt(req.body.password, 10);

      // 3단계. 기존에 임시 정보가 있는지 확인 필요(있다면 제거후 삽입필요)
      sql = "delete from certification where email=?";
      conn = await database.getConnection();
      await database.queryContinue(conn, sql, [req.body.email]);

      sql = "insert into certification values(?,?,?,?,?,?,?,?,DEFAULT)";
      let data = [
        req.body.email,
        user.password,
        req.body.firstName,
        req.body.lastName,
        req.body.gender,
        req.body.nickName,
        user.avatar,
        key,
      ];
      result = await database.query(conn, sql, data);

      // 제대로 실행 된다면...
      res.status(201).json({
        message: "User created!",
        result: result,
      });
    } else {
      // 메크로라고 판단
      throw new Error("I recognized it as a macro.");
    }
  } catch (err) {
    // 만약 오류가 난다면
    console.log(err);
    res.status(500).json({
      message: err.message,
    });
  }
};

// 이메일 인증 확인
exports.confirmEmail = async (req, res) => {
  // DB에 저장된 토큰과 url을 통해 넘어온 토큰 값을 비교
  // 일치하면 계정활성화 -> certification 조회후 비교한다음 일치하면 삭제후 authors로 이전 필요

  try {
    // 1단계. 임시정보와 일치여부판단
    let sql = "select * from certification where email=? and token=?";
    const conn = await database.getConnection();
    const result = await database.queryContinue(conn, sql, [
      req.query.email,
      req.query.key,
    ]);

    let url = process.env.URL + ":" + process.env.PORT;

    if (result.length != 0) {
      // 결과가 있음
      sql = "insert into authors values (?,?,?,?,?,?,?,DEFAULT,DEFAULT)";
      const data = [
        result[0].email,
        result[0].password,
        result[0].first_name,
        result[0].last_name,
        result[0].gender,
        result[0].nickname,
        result[0].avatar,
      ];
      await database.queryContinue(conn, sql, data);

      sql = "delete from certification where email=?";
      await database.query(conn, sql, [result[0].email]);

      res.send(
        `<script type="text/javascript">alert("Membership registration has been completed normally. Please sign in.");location.href="${
          url + "/login"
        }";</script>`
      );
    } else {
      // 결과가 없음
      res.send(
        `<script type="text/javascript">alert("Exceeded or incorrect information. Please try again.");location.href="${url}";</script>`
      );
    }
  } catch (err) {
    // 만약 오류가 난다면
    res.status(500).json({
      message: "Invalid authentication credentials!",
    });
  }
};

exports.getUserDate = async (req, res) => {
  try {
    let sql =
      "select first_name, last_name, gender, avatar from authors where email=?";
    const conn = await database.getConnection();
    const result = await database.query(conn, sql, [req.query.email]);

    // 제대로 실행 된다면...
    res.status(201).json({
      first_name: result[0].first_name,
      last_name: result[0].last_name,
      gender: result[0].gender,
      avatar: result[0].avatar,
    });
  } catch (err) {
    // 만약 오류가 난다면
    res.status(500).json({
      message: "Invalid authentication credentials!",
    });
  }
};

exports.setUserData = async (req, res) => {
  try {
    req.body.password = await doBcrypt(req.body.password, 10);

    let imagePath = req.body.imagePath; //string으로 전달받을때
    if (req.file) {
      //파일로 전달받을때
      imagePath = process.env.BACKED + "/images/avatar/" + req.file.filename;
    }

    // const mysql = require('mysql');

    let sql1 = "SET FOREIGN_KEY_CHECKS=0;";
    let sql2 =
      "update authors set password=?, avatar=?, nickname=? where email=?;";
    let sql3 = "SET FOREIGN_KEY_CHECKS=1;";
    let data = [
      req.body.password,
      imagePath,
      req.body.nickname,
      req.body.email,
    ];
    const conn = await database.getConnection();
    const result = await database.query(conn, sql1 + sql2 + sql3, data);

    // 제대로 실행 된다면...
    res.status(201).json({
      message: "User account update!",
      result: result,
    });
  } catch (err) {
    // 만약 오류가 난다면
    console.log(err);
    res.status(500).json({
      message: "Invalid authentication credentials!",
    });
  }
};

// 비번 초기화 시 이메일 확인하기 위한 이메일 전송, 키 저장
exports.getUserConfirm = async (req, res) => {
  try {
    // 1단게. 존재하는 아이디가 있어야 함
    let sql = "select * from authors where email=?";
    let conn = await database.getConnection();
    let result = await database.query(conn, sql, [req.query.email]);

    if (result.length == 0) {
      throw new Error("Email is not existed!!");
    }

    const key = await doEmailKey(req, "passwordReset");

    // 기존에 존재하는 정보가 있는지...
    sql = "delete from email where email=?";
    conn = await database.getConnection();
    await database.queryContinue(conn, sql, [req.query.email]);

    sql = "insert into email values(?,?,DEFAULT)";
    let data = [req.query.email, key];
    result = await database.query(conn, sql, data);
  } catch (err) {
    // 만약 오류가 난다면
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.emailConfirm = async (req, res) => {
  try {
    let url =
      process.env.URL +
      ":" +
      process.env.PORT +
      "/reset?email=" +
      req.query.email +
      "&key=" +
      req.query.key;
    res.send(
      `<script type="text/javascript">alert("Authentication completed. Please reset your password.");location.href="${url}";</script>`
    );
  } catch (err) {
    // 만약 오류가 난다면
    console.log(err);
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.passwordReset = async (req, res) => {
  try {
    // 1단계. 임시정보와 일치여부판단
    let sql = "select * from email where email=? and token=?";
    let conn = await database.getConnection();
    let result = await database.query(conn, sql, [
      req.body.email,
      req.body.key,
    ]);

    if (result.length != 0) {
      // 비번 수정...
      let password = await doBcrypt(req.body.password, 10);

      sql = "delete from email where email=?";
      conn = await database.getConnection();
      await database.queryContinue(conn, sql, [req.body.email]);

      sql = "update authors set password=? where email=?";
      let data = [password, req.body.email];
      await database.query(conn, sql, data);

      // 제대로 실행 된다면...
      res.status(201).json({
        message: "User password update!",
        result: result,
      });
    } else {
      // 결과가 없음
      throw new Error("Exceeded or incorrect information. Please try again.");
    }
  } catch (err) {
    // 만약 오류가 난다면
    console.log(err);
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.getUserAuthority = async (req, res, next) => {
  // console.log("ok");
  try {
    let sql = "select email from authors where authority='admin'";

    let data = [req.query.userdata];

    const conn = await database.getConnection();
    const result = await database.query(conn, sql, data);
    // console.log(result);

    // 제대로 실행 된다면...
    res.status(201).json({
      email: result,
    });
  } catch (err) {
    // console.log(err);
    res.status(500).json({
      message: "userauthority load fail...",
    });
  }
};
