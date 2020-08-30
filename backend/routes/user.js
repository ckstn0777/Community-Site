const express = require('express');
const router = express.Router();
const UserController = require('../controller/user');
const checkAuth = require('../middleware/check-auth');
const extractFile = require('../middleware/file');

router.post("/login", UserController.userLogin);
router.post("/signup", UserController.userSignup);

router.post("/passwordReset", UserController.passwordReset); // 패스워드 재설정
router.get("/confirmEmail", UserController.confirmEmail); // 회원가입 시 이메일 인증
router.get("/emailConfirm", UserController.emailConfirm); // 비번 초기화 설정 시 이메일 인증
router.get("/search", checkAuth ,UserController.getUserDate);

router.get("/confirm", UserController.getUserConfirm); // 비번 변경
router.put("/", checkAuth ,extractFile ,UserController.setUserData);

router.get("/authority", UserController.getUserAuthority);

module.exports = router;
