const express = require("express");
const path = require("path");
const nunjucks = require("nunjucks");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const session = require("express-session");

const { sequelize } = require("./models");

const indexRouter = require("./routes/index");
const userRouter = require("./routes/users");
const commentRouter = require("./routes/comments");

const server = express();

server.set("view engine", "html");
dotenv.config();
nunjucks.configure("views", {
  express: server,
  watch: true,
});
server.use(morgan("dev"));

server.use("/", express.static(path.join(__dirname, "public")));

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser(process.env.COOKIE_SECRET));
server.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "session-cookie",
  })
);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("db successfully connected...");
  })
  .catch((err) => {
    console.error(err);
  });

server.set("port", 8080);

server.use("/", indexRouter);
server.use("/users", userRouter);
server.use("/comments", commentRouter);

server.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

server.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

server.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

server.listen(server.get("port"), (req, res) => {
  console.log(`${server.get("port")} port waiting on...`);
});
