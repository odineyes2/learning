const mongoose = require("mongoose");

const connect = () => {
  if (process.env.NODE_ENV !== "production") {
    mongoose.set("debug", true);
  }
  mongoose
    .connect("mongodb://odineyes:Knrlove0923!@localhost:27017/admin", {
      dbName: "nodejsDB",
    })
    .then(() => {
      console.log("몽고디비 연결 성공...");
    })
    .catch((err) => {
      console.log("연결 에러", err);
    });
};

mongoose.connection.on("error", (error) => {
  console.log("몽고디비 연결 에러", error);
});
mongoose.connection.on("disconnected", () => {
  console.error("연결이 종료되었습니다. 재연결을 시도합니다...");
  connect();
});

module.exports = connect;
