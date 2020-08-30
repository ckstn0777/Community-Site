require("dotenv").config();

const database = require("../database");
const captcha = require("../middleware/captcha-auth");
const moment = require("moment");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

exports.imageSave = (req, res, next) => {
  const url = process.env.URL + ":" + process.env.PORT; // 수정필요합니다~~!!

  let imgUrl = url + "/images/" + req.file.filename;

  if (imgUrl) {
    res.status(200).json({
      path: imgUrl,
    });
  } else {
    res.status(500).json({
      message: err.message,
      imagePath: imagePath,
    });
  }
};

// 게시글 저장
exports.addPost = async (req, res, next) => {
  try {
    const auth = await captcha(req, res);
    // 사람으로 판단
    if (JSON.parse(auth).score > 0.5) {
      let sql = "select max(post_date) as recently from post where writer=?";
      let conn = await database.getConnection();
      let result = await database.query(conn, sql, [req.userData.nickname]);

      if (
        (new Date(moment().format("YYYY-MM-DD HH:mm:ss")) -
          result[0].recently) /
          1000 /
          60 >
        1
      ) {
        //1분제한
        /* 번호-제목-작성자-내용-작성시간-조회수-카테고리-이미지경로 순 */
        sql =
          "insert into post(title, writer, content, catergory, img_path) values(?, ?, ?, ?, ?)";
        let data = [
          req.body.title,
          req.body.writer,
          req.body.content,
          req.body.catergory,
          req.body.imagePath,
        ];

        conn = await database.getConnection();
        result = await database.query(conn, sql, data);

        // 제대로 실행 된다면...
        res.status(201).json({
          message: "post successful save!!",
        });
      } else {
        throw new Error(
          "There is a one-minute limit to prevent post from being plastered."
        );
      }
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

// 게시글 삭제
exports.deletePost = async (req, res, next) => {
  try {
    let sql = "delete from post where post_no=? and writer=?";
    let data = [req.params.id, req.userData.nickname];

    const conn = await database.getConnection();
    const result = await database.query(conn, sql, data);

    // 제대로 실행 된다면...
    res.status(201).json({
      message: "post delete success!!",
    });
  } catch (err) {
    res.status(500).json({
      message: "post delete fail...",
    });
  }
};

// 게시글 수정
exports.updatePost = async (req, res, next) => {
  try {
    let sql =
      "update post set title=?, content=?, img_path=? where post_no=? and writer=?";
    let data = [
      req.body.title,
      req.body.content,
      req.body.imagePath,
      req.params.id,
      req.userData.nickname,
    ];

    const conn = await database.getConnection();
    const result = await database.query(conn, sql, data);

    // 제대로 실행 된다면...
    res.status(201).json({
      message: "post update success!!",
    });
  } catch (err) {
    res.status(500).json({
      message: "post update fail...",
    });
  }
};

// 개별 게시글 조회
exports.getEachPost = async (req, res, next) => {
  console.log("sss");
  try {
    let sql = "update post set views=views+1 where post_no=?";
    const conn = await database.getConnection();
    await database.queryContinue(conn, sql, [req.params.id]);

    sql =
      "select post.post_no, post.title, post.writer, post.content, post.post_date, post.views, post.likes, \
    post.catergory, post.avatar, IFNULL(reply.reply_cnt, 0) as reply_cnt\
    from \
    (select count(*) as reply_cnt, post_no from reply where parent = reply_no and is_delete='N' group by post_no) as reply\
    right join\
    (\
    select post_no, title, writer, content, post_date, views, likes, catergory, avatar\
        from post inner join authors on authors.nickname = post.writer\
    ) as post on reply.post_no = post.post_no where post.post_no=?;";
    const result = await database.query(conn, sql, [req.params.id]);

    // 제대로 실행 된다면...
    res.status(201).json({
      post: result[0],
    });
  } catch (err) {
    res.status(500).json({
      message: "post load fail...",
    });
  }
};

// 게시글 리스트 조회
exports.getPosts = async (req, res, next) => {
  try {
    let sql =
      "select post_no, title, writer, content, post_date, likes, views, catergory, img_path, avatar \
    from post inner join authors on authors.nickname = post.writer where catergory=? order by post_no DESC limit ?,?;";
    // let sql = "select * from post where catergory=? order by post_no DESC limit ?,?";
    let data = [req.query.catergory, req.query.pages * 5 - 5, 5];

    const conn = await database.getConnection();
    const result = await database.query(conn, sql, data);

    // 제대로 실행 된다면...
    res.status(201).json({
      posts: result,
    });
  } catch (err) {
    res.status(500).json({
      message: "post load fail...",
    });
  }
};

// 인기글 조회
exports.getPopularPost = async (req, res, next) => {
  try {
    let sql =
      "select A.post_no, title, writer, content, img_path from\
    (select * from post where catergory=?) as A left outer join \
    (select post_no, count(*) as like_increase \
    from likeTBL where like_date > DATE_SUB(NOW(),INTERVAL 3 day) and islike='Y' \
    group by post_no) as B\
    on A.post_no = B.post_no order by like_increase DESC limit 0,3";

    let data = [req.query.catergory];

    const conn = await database.getConnection();
    const result = await database.query(conn, sql, data);

    // 제대로 실행 된다면...
    res.status(201).json({
      posts: result,
    });
  } catch (err) {
    res.status(500).json({
      message: "post load fail...",
    });
  }
};

// 공감 비공감 설정 (게시글번호-회원닉네임-공감/비공감 여부 저장)
exports.setLikeCount = async (req, res, next) => {
  try {
    let sql = "select * from likeTBL where post_no=? and nickname=?";
    let data = [req.body.postNo, req.body.nickname];

    const conn = await database.getConnection();
    let result = await database.queryContinue(conn, sql, data);

    if (result[0] === undefined) {
      // 조회 결과가 없다면? -> insert해줌. post likes도 증가시켜줌
      if (req.body.like > 0) {
        // 공감
        sql1 =
          "insert into likeTBL(post_no, nickname, islike, ishate) value (?,?,'Y','N')";
        await database.queryContinue(conn, sql1, data);

        sql2 = "update post set likes=likes+1 where post_no=?";
        await database.query(conn, sql2, data[0]);
      } else {
        sql1 =
          "insert into likeTBL(post_no, nickname, islike, ishate) value (?,?,'N','Y')";
        await database.queryContinue(conn, sql1, data);

        sql2 = "update post set likes=likes-1 where post_no=?";
        await database.query(conn, sql2, data[0]);
      }
    } else {
      // 만약 조회 결과가 있다면 -> update를 해줌. post likes는 2증가혹은 2감소시켜줌
      if (req.body.like > 0) {
        // 공감
        if (result[0].islike === "Y") {
          // 건들필요없음
          conn.release();
        } else {
          sql1 =
            "update likeTBL set islike='Y', ishate='N' where post_no=? and nickname=?";
          await database.queryContinue(conn, sql1, data);

          sql2 = "update post set likes=likes+2 where post_no=?"; // 비공감에서 공감시에는 +2
          await database.query(conn, sql2, data[0]);
        }
      } else {
        if (result[0].islike === "N") {
          // 건들필요없음
          conn.release();
        } else {
          sql1 =
            "update likeTBL set islike='N', ishate='Y' where post_no=? and nickname=?";
          await database.queryContinue(conn, sql1, data);

          sql2 = "update post set likes=likes-2 where post_no=?";
          await database.query(conn, sql2, data[0]);
        }
      }
    }
    // 제대로 실행 된다면...
    res.status(201).json({
      message: "post set like/hate successed!!",
    });
  } catch (err) {
    res.status(500).json({
      message: "post set like/hate failed...",
    });
  }
};

// 좋아요, 싫어요 조회. 내가 한것도 조회
exports.getLikeCount = async (req, res, next) => {
  const likeHate = {};

  try {
    let sql =
      "select count(*) as total_hate\
    from likeTBL \
    where post_no=? group by ishate having ishate='Y'";
    const conn = await database.getConnection();
    let result = await database.queryContinue(conn, sql, [req.query.postNo]);

    if (result[0] === undefined) {
      likeHate.total_hate = 0;
    } else {
      likeHate.total_hate = result[0].total_hate;
    }

    sql =
      "select count(*) as total_like\
    from likeTBL \
    where post_no=? group by islike having islike='Y'";
    result = await database.query(conn, sql, [req.query.postNo]);

    if (result[0] === undefined) {
      likeHate.total_like = 0;
    } else {
      likeHate.total_like = result[0].total_like;
    }

    if (req.query.nickname !== "undefined") {
      // 로그인 한 경우
      sql =
        "select islike as mylike, ishate as myhate from likeTBL where post_no=? and nickname=?;";
      const conn = await database.getConnection();
      result = await database.query(conn, sql, [
        req.query.postNo,
        req.query.nickname,
      ]);

      if (result[0] === undefined) {
        likeHate.mylike = null;
        likeHate.myhate = null;
      } else {
        likeHate.mylike = result[0].mylike;
        likeHate.myhate = result[0].myhate;
      }
    }

    res.status(201).json({
      likeHate: likeHate,
    });
  } catch (err) {
    res.status(500).json({
      message: "post load fail...",
    });
  }
};

// 메인 인기게시글 조회
exports.getMainPopularPost = async (req, res, next) => {
  try {
    let sql =
      "SELECT tt.*\
    FROM topten tt\
    INNER JOIN\
        (SELECT catergory, MAX(like_increase) AS max_like\
        FROM topten\
        GROUP BY catergory) groupedtt \
    ON tt.catergory = groupedtt.catergory \
    AND tt.like_increase = groupedtt.max_like order by tt.like_increase DESC limit 0,4";

    const conn = await database.getConnection();
    const result = await database.query(conn, sql, null);

    // 제대로 실행 된다면...
    res.status(201).json({
      posts: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "post load fail...",
    });
  }
};

// 메인 최신 게시글 조회
exports.getNewlyPost = async (req, res, next) => {
  try {
    let sql =
      "SELECT tt.*\
    FROM topten tt\
    INNER JOIN\
        (SELECT catergory, max(post_date) as post_date\
        FROM topten\
        GROUP BY catergory order by post_date DESC) groupedtt \
    ON tt.catergory = groupedtt.catergory \
    AND tt.post_date = groupedtt.post_date order by tt.post_date DESC limit 0,3;";

    const conn = await database.getConnection();
    const result = await database.query(conn, sql, null);

    // 제대로 실행 된다면...
    res.status(201).json({
      posts: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "post load fail...",
    });
  }
};

// 검색 조회
exports.getPostSearch = async (req, res, next) => {
  try {
    let sql =
      "select * from post\
    where title like ? or content like ? order by post_no DESC limit ?,?;";

    let data = [
      "%" + req.query.search + "%",
      "%" + req.query.search + "%",
      req.query.pages * 10 - 10,
      10,
    ];

    const conn = await database.getConnection();
    const result = await database.query(conn, sql, data);

    // 제대로 실행 된다면...
    res.status(201).json({
      posts: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "post load fail...",
    });
  }
};
// 내 게시글 조회
exports.getMyPost = async (req, res, next) => {
  try {
    let sql =
      "select * from post\
    where writer=? order by post_no DESC limit ?,?;";

    let data = [req.query.nickname, req.query.pages * 10 - 10, 10];

    const conn = await database.getConnection();
    const result = await database.query(conn, sql, data);
    // 제대로 실행 된다면...
    res.status(201).json({
      posts: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "post load fail...",
    });
  }
};
