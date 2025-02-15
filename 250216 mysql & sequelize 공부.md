# 250216 mysql & sequelize 공부

## mysql 설치

- mysql 공식 홈페이지에서 installer를 다운받아 설치한다.
- custom / mysql server 와 workbench만을 선택해 설치한다.
- Authentication Method 메뉴에서는 Use Legacy Authentication Method를 선택한다.
- 여기서 mysql server 의 root 계정의 비밀번호를 설정할 수 있다.

## mysql server 실행

- $ mysql -h localhost -u root -p

## db 생성하기

- 

## 프로젝트 생성 및 초기 설정

- $ mkdir learn-sequelize
- $ cd learn-sequelize
- $ npm init
- $ npm i express morgan nunjucks sequelize sequelize-cli mysql2
- $ npm i -D nodemon

- $ npx sequelize init
- models 폴더안에 index.js가 생성되었는지 확인한다.

```javascript | /models/index.js
const Sequelize = require("sequelize");

const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];
const db = {};

const squelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
db.sequelize = squelize;

module.exports = db;
```

- Sequelize 는 시퀄라이즈 패키지이자 생성자이다.
- config/config.json에서 데이터베이스 설정을 불러온 후
- new Sequelize 를 통해 mysql 연결 객체를 생성한다.
- 연결 객체를 나중에 재사용하기 위해 db.sequelize에 넣어둔다.

## config/config.json 설정파일 수정하기

```json /config/config.json
{
  "development": {
    "username": "root",
    "password": "password!",
    "database": "nodejsdb",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```

## mysql 연결하기

- 익스프레스 앱과 mysql 앱 연결하기

```javascript | /app.js
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const nunjucks = require("nunjucks");

const { sequelize } = require("./models");

const app = express();
app.set("port", process.env.PORT || 3001);
app.set("view engine", "html");

sequelize
  .sync({ force: false }) // 서버 실행 시마다 테이블 재생성하지 않음
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch((err) => {
    console.error(err);
  });

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const err = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_END !== "production" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기중...");
});
```

## sequelize 에서 모델 정의하기

- db 생성하기와 같은 내용을 sequelize 문법으로 작성한다.