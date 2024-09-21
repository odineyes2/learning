const express = require("express");
const path = require("path");
const morgan = require("morgan");
const { sequelize } = require("./models");
const indexRouter = require("./routes");
const userRouter = require("./routes/user");
const commentRouter = require("./routes/comment");

const app = express();

app.set("port", process.env.NODE_PORT || 3000);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

sequelize
  .sync({ force: false })
  .then(console.log("db connected successfully..."))
  .catch((err) => {
    console.error(err);
  });

app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/comment", commentRouter);

app.listen(app.get("port"), () => {
  console.log(`app.get('port') port waiting on...`);
});
