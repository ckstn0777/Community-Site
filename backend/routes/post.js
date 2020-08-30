const express = require('express');
const router = express.Router();
const PostController = require('../controller/post');
const extractFile = require('../middleware/file');
const checkAuth = require('../middleware/check-auth');

router.get("/search", PostController.getPostSearch); // 검색 조회
router.get("/mypost", checkAuth, PostController.getMyPost); // 내 게시글 조회

router.post("", checkAuth, PostController.addPost); // 게시글 저장
router.get("", PostController.getPosts); // 카테고리 newly 게시글 조회
router.delete("/:id", checkAuth, PostController.deletePost); //게시글 삭제
router.put("/:id", checkAuth, PostController.updatePost); //게시글 수정

router.get("/postEach/:id", PostController.getEachPost); // 개별 게시글 조회
router.get("/popular", PostController.getPopularPost); // 카테고리 인기 게시글 조회

router.get("/main-popular", PostController.getMainPopularPost); // 메인 - 인기 게시글 조회
router.get("/main-newly", PostController.getNewlyPost); // 메인 - 최신 게시글 조회

router.post("/image", extractFile, PostController.imageSave); // 게시글 이미지 저장
router.post("/like", checkAuth, PostController.setLikeCount); // 게시글 좋아요/싫어요 처리
router.get("/like", PostController.getLikeCount);  // 게시글 좋아요/싫어요 불러오기

module.exports = router;
