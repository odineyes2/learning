# 250216 memo

## express 설치

- $ npm i express morgan dotenv cookie-parser express-session
- $ npm i nodemon -D

```js app.js
const express = require('express');

const app = express();

const Port = app.get('port', 8080);

app.get('/', (req,res)=>{
    // res.send('hello express');
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.listen(8080, (req,res)=>{
    console.log('waiting on 8080...');
})
```

## 유용한 미들웨어 설치

```js app.js
const express = require('express');
const morgan = require('morgan');
const cookiesParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const app = express();

const Port = app.set('port', process.env.PORT || 3000));

app.use(morgan(dev));
app.use('/', express.static(path.join(__dirname, 'public'))); // 미들웨어: static

// app.get('/', (req,res)=>{
//     // res.send('hello express');
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

app.use(express.json()); // 미들웨어 : body-parser => 해당 요청의 본문의 데이터를 해석하여 req.body에 추가한다.
app.use(express.urlencoded({extend: false})); // 미들웨어 : body-parser
app.use(cookieParser(process.env.COOKIE_SECRET)); // 요청에 동봉된 쿠키를 해석하여 req.cookie에 추가한다.
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false,
    },
    name: 'session-cookie',
})); // 미들웨어 session , req.session 안에 저장된다.

app.listen(8080, (req,res)=>{
    console.log('waiting on 8080...');
})
```

## 라우터와 에러 처리 미들웨어

```js /app.js
const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const path = require("path");
const dotenv = require("dotenv");

const indexRouter = require("./routes");
const userRouter = require("./routes/user");

dotenv.config();

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "session-cookie",
  })
);

app.set("port", process.env.PORT || 3000);

//router
app.use("/", indexRouter);
app.use("/user", userRouter);

// error handler
app.use((req, res, next) => {
  res.status(404).send("Not Found");
});
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

app.listen(app.get("port"), () => {
  console.log(
    "server is operating successfully...\n",
    `http://localhost:${app.get("port")}/`
  );
});
```

```js /routes/index.js
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>This is homepage.");
});

module.exports = router;

```

```js /routes/user.js
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>This is userpage.");
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`<h2>This is for user ${id}</h2>`);
});

module.exports = router;
```
