# 정답 코드

## 숙지해야 하는 미들웨어

### express-session

```javascript
const session = require("express-session");

app.use(
  session({
    resave: false,
    saveUninitialize: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "session-cookie",
  })
);
// 세션 관리용 미들웨어이다.
// secret: 이 부분은 쿠키의 비밀키와 동일하게 한다.
```

## Router 객체

```javascript
const express = require("express");

const router = express.Router();

router.get(
  "/",
  (req,
  (res) => {
    res.send("Hello index");
  })
);

module.exports = router;
```

```javascript
const express = require("express");

const router = express.Router();

router.get(
  "/",
  (req,
  (res) => {
    res.send("Hello User");
  })
);

module.exports = router;
```

```javascript
const express = require("express");
const indexRouter = require("./routes");
const userRouter = require("./routes/user");
const app = express();

app.use("/", indexRouter);
app.use("/user", userRouter);
app.user((req, res, next) => {
  res.status(404).send("Not Found...");
});

app.listen(3000, () => {
  consold.log(`Waiting on 3000...`);
});
```

## 동적 라우팅

```javascript
const express = require("express");
const userRouter = require("./routes/user");
const router = express();

router.use("/user", userRouter);
```

```javascript
const express = require("express");
const router = express.Router();

router.use("/:id", (req, res) => {
  conosole.log(req.params);
  res.send(`This page is for ${req.params.id}`);
});

module.exprots = router;
```

## 주소가 같고 요청이 다른 경우의 코드

```javascript
router.get("/", (req, res) => {
  res.send("GET /abc");
});

router.post("/", (req, res) => {
  res.send("POST /abc");
});
```

```javascript
router
  .route("/")
  .get((req, res) => {
    res.send("GET /abc");
  })
  .post((req, res) => {
    res.send("POST /abc");
  });
```
