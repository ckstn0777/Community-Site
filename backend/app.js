require("dotenv").config();

const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const userRouter = require("./routes/user");
const postRouter = require("./routes/post");
const replyRouter = require("./routes/reply");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  "/images",
  express.static(path.join(__dirname, "images"), {
    maxAge: 86400000 * 30,
  })
);

if (process.env.NODE_ENV == "dev") {
  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,POST,PATCH,PUT,DELETE,OPTIONS"
    );
    // res.setHeader('Cache-Control','max-age=3600');
    next();
  });
} else if (process.env.NODE_ENV == "prod") {
  app.use("/", express.static(path.join(__dirname, "angular"))); //접근허가
}

app.use("/api/user", userRouter);
app.use("/api/post", postRouter);
app.use("/api/reply", replyRouter);

if (process.env.NODE_ENV == "prod") {
  app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "angular", "index.html"));
  });
}

module.exports = app;
