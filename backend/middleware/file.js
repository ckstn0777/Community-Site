const multer = require("multer");
// 이미지 확장자 타입 설정/제한
const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
};

// 설정
const storage = multer.diskStorage({
  // 저장 장소설정
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error("Invalid mime type");
    // 확장자가 존재한다면
    if (isValid) {
      error = null;
    }
    if (req.url == "/") {
      // 사용자 이미지는 별도 저장
      cb(error, "images/avatar");
    } else {
      // 게시글 이미지 저장
      cb(error, "images");
    }
  },
  // 파일 이름설정(중복주의...)
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(" ").join("-");
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + "-" + Date.now() + "." + ext);
  },
});
// 20MB로 제한?
module.exports = multer({
  storage: storage,
  limits: { files: 20 * 1024 * 1024 },
}).single("image");
