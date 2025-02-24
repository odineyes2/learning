# 250216 memo

## 1. express 설치

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

## 2. 유용한 미들웨어 설치

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

## 3. 라우터와 에러 처리 미들웨어

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

## 4. 비동기 패턴 연습

### fetch 메서드 패턴

```js /routes/homeRouter.js
const express = require("express");

const router = express.Router();

const fetchData = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts/";
  const response = await fetch(url);
  const json = await response.json();
  console.log(json);
};

router.get("/", (req, res) => {
  fetchData();
  res.send("<h1>This is for Homepage.</h1>");
});

module.exports = router;
```

### axios 메서드 패턴

```js /routes/homeRouter.js
const express = require("express");
const axios = require("axios");

const router = express.Router();

const fetchData = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts/1";
  const response = await axios.get(url);
  console.log(response.data.title);
};

router.get("/", (req, res) => {
  fetchData();
  res.send("<h1>This is for Homepage.</h1>");
});

module.exports = router;
```

## 5. services, apiConfig 코드 분리 및 모듈 재활용 패턴 연습

```js /services/fetchData.js
const axios = require("axios");

const fetchData = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

module.exports = fetchData;

```

```js /config/apiConfig.js
const API_CONFIG = {
  POSTS_URL: "https://jsonplaceholder.typicode.com/posts/",
  USERS_URL: "https://jsonplaceholder.typicode.com/users/",
  COMMENTS_URL: "https://jsonplaceholder.typicode.com/comments/",
};

module.exports = API_CONFIG;
```

- 여러 페이지에서 공통적으로 사용되는 코드는 따로 관리하는 것이 좋다.
- 익스프레스에서 흔히 사용되는 폴더 구조이다.
- 그러면 본 라우터 페이지로 다음과 같이 수정한다.

```js /routes/home.js
// api에서 전체 자료를 읽어와서 타이틀과 링크를 제공하는 페이지.
const express = require("express");
const fetchData = require("../services/fetchData"); // 모듈화한 함수를 재활용하기 위해 임포트
const { POSTS_URL } = require("../config/apiConfig"); // 모듈화한 api url를 재활용하기 위해 임포트

const router = express.Router();

router.get("/", async (req, res) => {
  const posts = await fetchData(POSTS_URL);
  let html = `<h1>Post Titles(${posts.length})</h1><ul>`;
  posts.forEach((post) => {
    html += `<li><a href=/user/${post.id}>${post.title}</a></li>`;
  });
  html += `</ul>`;
  res.send(html);
});

module.exports = router;
```

```js /routes/post.js
const express = require("express");
const fetchData = require("../services/fetchData");
const { POSTS_URL } = require("../config/apiConfig");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("This is for post Page.");
});
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const url = `${POSTS_URL}${id}`;
  const post = await fetchData(url);
  let html = `<h2>This is for id ${id} post Page.</h2><ul>`;
  html += `<li>UserId: ${post.userId}</li>`;
  html += `<li>id: ${post.id}</li>`;
  html += `<li>Title: ${post.title}</li>`;
  html += `<li>Body: ${post.body}</li>`;
  html += `</ul>`;
  res.send(html);
});

module.exports = router;
```

## 6. try & catch 문으로 api 네트워크 에러 발생 시 서버 터짐 방지

```js /routes/post.js
const express = require("express");
const fetchData = require("../services/fetchData");
const { POSTS_URL } = require("../config/apiConfig");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("This is for post Page.");
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const url = `${POSTS_URL}${id}`;

  try {
    const post = await fetchData(url);

    if (!post || Object.keys(post).length === 0) {
      return res.status(404).send(`<h2>Post with ID ${id} not found.</h2>`);
    }

    let html = `<h2>This is for id ${id} post Page.</h2><ul>`;
    html += `<li>UserId: ${post.userId}</li>`;
    html += `<li>id: ${post.id}</li>`;
    html += `<li>Title: ${post.title}</li>`;
    html += `<li>Body: ${post.body}</li>`;
    html += `</ul>`;
    return res.send(html);
  } catch (err) {
    console.error(err);
    return res.status(500).send("<h2>Internal Server Error</h2>");
  }
});

module.exports = router;
```

## 앞으로 해야 할 것

- [ ] db 와 express 서버 연결
- [ ] express 서버에서 api 서버로 만들기
