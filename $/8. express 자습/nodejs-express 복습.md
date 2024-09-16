# 복습

## 초기 셋팅

- npm init -y
- nodejs, mysql 설치
- $ npm i express morgan mysql sequlize sequlize-cli mysql2
- $ npm i -D nodemon
- "start" : "nodemon app"
- $ npm i cookie-parser express-session multer dotenv nunjucks

- $ mkdir public // 정적 파일 저장 폴더(html)
- $ mkdir routes // 라우터 저장 폴더
- $ mkdir views
- $ mkdir passport

## hello express 파일 만들기

```javascript | app.js
const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("Hello, Express...");
});

app.listen("3000", () => {
  console.log("3000 번 포트에서 대기 중...");
});
```

## app.use() | app.get() | app.post()

```javascript
app.use(미들웨어); // 모든 요청에 대해 미들웨어를 실행함...
app.use("/home", 미들웨어); // home 으로 시작하는 모든 요청에 대해 미들웨어를 실행
app.get("/", 미들웨어); // '/' 로 들어오는 GET 요청에 대해 미들웨어를 실행
app.post("/user", 미들웨어); // user 로 시작하는 post 요청에 대해 미들웨어를 실행
```
