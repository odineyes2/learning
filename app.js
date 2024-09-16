const express = require("express");

const { sequelize } = require("./models");
const indexRouter = require("./routes");
const userRouter = require("./routes/users");
const commentRouter = require("./routes/comments");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/users", userRouter);
app.use("/comments", commentRouter);

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
});

app.listen(8084, () => {
  console.log(`8084 port waiting on...`);
});
