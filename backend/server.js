require("dotenv").config();

const http = require("http");
const debug = require("debug")("node-angular");
const app = require("./app");

// 포트 설정
const normalizePort = (val) => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};

// 서버 연결시 오류
const onError = (error) => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + PORT;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

// 서버 연결시 실행될 함수
const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + PORT;
  debug("Listening on " + bind);
};

const { PORT } = process.env;
app.set("port", PORT);

const server = http.createServer(app);
// 이벤트 발생시 호출될 함수
server.on("error", onError);
server.on("listening", onListening);
server.listen(PORT);
