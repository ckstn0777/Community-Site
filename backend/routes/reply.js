const express = require('express');
const router = express.Router();
const ReplyController = require('../controller/reply');
const checkAuth = require('../middleware/check-auth');

router.post("", checkAuth, ReplyController.addReply); // 댓글 저장(토큰검사후 진행)
router.post("/reply", checkAuth, ReplyController.addRReply); // 덧글 저장(토큰검사후 진행)
router.delete("/reply", checkAuth, ReplyController.deleteReply); // 댓글.덧글 삭제

router.get("", ReplyController.getReply); // 댓글 조회
router.get("/reply", ReplyController.getRReply); // 덧글 조회

module.exports = router;
