const database = require('../database');
const captcha = require('../middleware/captcha-auth');
const moment = require('moment');
require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");

// 댓글 저장
exports.addReply = async (req, res, next) => {
  try {
    const auth = await captcha(req, res);
    // 사람으로 판단
    if (JSON.parse(auth).score > 0.5) {
      let sql = "select max(reply_date) as recently from reply where post_no=? and writer=?";
      const conn = await database.getConnection();
      const result = await database.query(conn, sql, [req.body.postNo, req.userData.nickname]);

      if ((new Date(moment().format('YYYY-MM-DD HH:mm:ss')) - result[0].recently)/1000/60 > 1) { //1분제한
        // 현재 댓글번호 최댓값을 구하고 거기다가 +1을 해줘야함...
        sql = "select max(reply_no) as max from reply where post_no=?";
        const conn1 = await database.getConnection();
        const result1 = await database.query(conn1, sql, [req.body.postNo]);

        let replyNo = 1;
        if(result1[0].max === null) {

        } else {
          replyNo = result1[0].max + 1;
        }


        sql = "insert into reply(post_no, reply_no, writer, content, parent) values(?,?,?,?,?)";
        let data = [req.body.postNo, replyNo, req.body.nickname, req.body.reply, replyNo];
        const conn2 = await database.getConnection();
        const result2 = await database.query(conn2, sql, data);

        res.status(201).json({
          replyNo: replyNo
        });
      }
      else {
        throw(new Error('There is a one-minute limit to prevent comments from being plastered.'));
      }
    }
    else { // 메크로라고 판단
      throw(new Error('I recognized it as a macro.'));
    }
  } catch(err) {
    res.status(500).json({
      message: err.message
    });
  }
};

// 댓글조회
exports.getReply = async (req, res, next) => {
  try {
    // 부모댓글번호가 자기자신번호와 같은경우에만 댓글임. 그걸 10개만 조회
    let sql = "select * from\
    (select * from reply where post_no=? and reply_no=parent and is_delete='N' order by reply_no ASC limit ?,10) as A left outer join \
    (select reply_no, count(*) as count from reply where post_no=? and is_delete='N' group by parent) as B on A.reply_no = B.reply_no where is_delete='N';"

    // let sql = "select * from reply where post_no=? and reply_no=parent order by reply_no ASC limit ?,10";
    let data = [req.query.postNo, req.query.pages*10-10, req.query.postNo];

    const conn = await database.getConnection();
    const result = await database.query(conn, sql, data);

    res.status(201).json({
      reply: result
    });
  } catch(err) {
    res.status(500).json({
      message: "post load fail..."
    });
  }
}

// 덧글 저장
exports.addRReply = async (req, res, next) => {
  try {
    const auth = await captcha(req, res);
    // 사람으로 판단
    if (JSON.parse(auth).score > 0.5) {
      let sql = "select max(reply_date) as recently from reply where post_no=? and writer=?";
      const conn = await database.getConnection();
      const result = await database.query(conn, sql, [req.body.postNo, req.userData.nickname]);

      if ((new Date(moment().format('YYYY-MM-DD HH:mm:ss')) - result[0].recently)/1000/60 > 1) { //1분제한
        // 역시 똑같이 현재 댓글번호 최댓값을 구하고 거기다가 +1을 해줘야함...
        sql = "select max(reply_no) as max from reply where post_no=?";
        const conn1 = await database.getConnection();
        const result1 = await database.query(conn1, sql, [req.body.postNo]);

        let replyNo = 1;
        if(result1[0].max === null) {

        } else {
          replyNo = result1[0].max + 1;
        }

        // 덧글 저장(게시글번호-댓글번호-작성자-내용-부모댓글번호)
        sql = "insert into reply (post_no, reply_no, writer, content, parent) values (?,?,?,?,?)";
        let data2 = [req.body.postNo, replyNo, req.body.nickname, req.body.reply, req.body.parent];

        const conn2 = await database.getConnection();
        const result2 = await database.query(conn2, sql, data2);

        res.status(201).json({
          replyNo: replyNo
        });
      }
      else {
        throw(new Error('There is a one-minute limit to prevent comments from being plastered.'));
      }
    }
    else { // 메크로라고 판단
      throw(new Error('I recognized it as a macro.'));
    }

  } catch(err) {
    res.status(500).json({
      message: err.message
    });
  }

};

// 덧글조회
exports.getRReply = async (req, res, next) => {
  try {
    // 부모댓글
    let sql = "select * from reply where post_no=? and parent=? and parent != reply_no and is_delete='N' order by reply_no ASC limit ?,10";
    let data = [req.query.postNo, req.query.parent, req.query.pages*10-10];

    const conn = await database.getConnection();
    const result = await database.query(conn, sql, data);

    res.status(201).json({
      reply: result
    });
  } catch(err) {
    res.status(500).json({
      message: "post load fail..."
    });
  }

}

exports.deleteReply = async (req, res, next) => {
  try{
    // 부모댓글
    let sql = "update reply set is_delete='Y' where post_no=? and reply_no=? and writer=?";
    let data = [req.query.postNo, req.query.replyNo, req.userData.nickname];

    const conn = await database.getConnection();
    const result = await database.query(conn, sql, data);

    res.status(201).json({
      message: "reply delete success!"
    });
  } catch(err) {
    console.log(err);
    res.status(500).json({
      message: "reply delete failed.."
    });
  }
}
