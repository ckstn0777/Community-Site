// 클라이언트에서 전달받은 토큰을 검사함.
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_KEY);
    req.userData = decodedToken;
    next();
  }
  catch(err) {
    res.status(401).json({message: "You are not authenicated!"})
  }
}
