# memo

## node.js

- [x] express dev web server
- [ ] cookie & session
- [ ] dotenv
- [ ] mysql sequelize api
- [ ] mongo db mongoose api

## React.js

- [ ] routing
- [ ] 동적 routing
- [ ] form
- [ ] rest api data fetching
- [ ] data rendering

## next.js

- [ ] routing

## openai complete api

- [ ]

## 로그인을 구현하자. => 쿠키

쿠키는 별도의 어플리케이션은 아니고 웹서버를 구동할 때 미들웨어로써 쿠키를 셋팅하고 있다.

```js \ cookie.js
const http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200, {'Set-cookie':'mycookie=test'}); // 쿠키 세팅. 이후 쿠키가 있다면 브라우저가 자동으로 쿠키를 동봉해서 req를 보내준다.
    res.end('Hello Cookie');
})
    .listen(8083, ()=>{
        console.log(`Waiting on 8083 Port...`);
    })
```

## 로그인을 구현하자2 => 쿠키

```js
// 필요한 모듈 임포트
const http = require('http');
const fs = require('fs').promises;
const path = require('path');

// 쿠키 파싱 함수 정의

const parseCookies = (cookie = '') => {
    cookie
        .split(';')
        .map(v=>v.split('='))
        .reduce((acc,[k,v])=>{
            acc[k,trim()] = decodeURIComponent(v);
            return acc;
        }, {});
}

// 웹서버 실행 with 쿠키 파싱
http.createServer(async (req,res)=>{
    const cookies = parseCookies(req.header.cookie);
})

// 쿠키와 접속경로에 따른 페이지 라우팅
...
```

## 로그인을 구현하자3 => 세션

- 클라이언트의 브라우저에 저장된 쿠키는 조작되기 쉽다.
- 그러므로 민감한 정보를 쿠키에 저장하는 것은 바람직하지 않다.
- 그러므로 세션를 사용한다.
- 쿠키와 마찬가지로 웹서버의 코드에 미들웨어로 삽입된다.
- 웹서버의 실행과 함계 실행된다.
- 쿠키와 세션에 관해서 구현 원리만 보고 실제 구현은 검증된 툴을 사용하는 것이 좋다.

```js session.js
// 쿠키를 파싱하는 부분까지 동일
// 쿠키를 세팅하는 부분에서 uniqueInt라는 상수와 유지기한을 만들어서 브라우저의 쿠키에 저장하고 진짜 쿠키 정보(이름 등)은 서버의 db에 저장한다.(레디스를 사용한다.)
```

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

## 미들웨어

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