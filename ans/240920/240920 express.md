# express

## 1. express setup

- $ npm i express

## 2. hello express

```javascript
const express = require('express');

const app = express();

app.use((req,res)=>{
    res.send('hello expres')
})

app.listen(3000, ()=>{
    console.log("server's waiting on 3000...")
})
```

## 3. hello express with external html file

```javascript
const express = require('express');
const path = require('path');

const app = express();

const html = express.static(path.join(__dirname, 'public/index.html'))

app.use((req,res)=>{
    res.sendFile(html);
})

app.listen(3000, ()=>{
    console.log("server's waiting on 3000...")
})
```

## 4. morgan

```javascript
app.use(morgan('dev'));
```

## 5. static

```javascript

```

## 6. body-parser

```javascript
app.use(express.json());
app.use(express.urlencoded({extended: false}))
```

## 7. cookie-parser & dotenv

```javascript
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

dotenv.config();

app.use(cookieParser(process.env.COOKIE_SECRET));

```

```javascript | .env
COOKIE_SECRET=mySecret
```

## 8. express-session

```javascript
const session = require('express-session');

app.use(session({
    resave: false,
    saveUninitialize: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {        
        httpOnly: true,
        secure: false, 
    },
    name: "session-cookie",
}));
```

## 9. 미들웨어 장착 순서 및 next 호출

```javascript
app.use(
    ~
    ~
    ~    
)
```

## 10. next() 함수의 인수

- 

## 11. 미들웨어간 데이터 전달하기

```javascript
app.use(middle(req,res,next
    res.locals.~;
    next()
))
```

## 12. 미들웨어 안에 미들웨어 넣기(조건부 미들웨어 장착)

```javascript
app.use((req,res,next)=>{
    if(process.env.NODE_ENV==='production'){
        morgan('dev');
    } else {
        morgan('combined');
    }
})
```

## 13. multer

## 14. Router - / , /user로 접속한 경우 라우팅

```javascript | ./routes/index.js
const express = require('express');

const router = express.Router();

router.route("/")
.get((req,res,next)=>{
    res.sendFile(html);
})
.post
.patch
.delete
```

```javascript | /routes/user.js
~
```

```javascript | /app.js
const indexRouter = require('./index');

const app = express();

app.use('/', indexRouter);
app.use('/user', userRouter);
```

## 15. 동적 라우팅 => /user/[id] 로 접속한 경우 라우팅

```javascript | /routes/user.js
router.route("/")
.get((req,res,next)=>{
    res.sendFile(html);
});
router.route("/:id/comments")
.get((req,res,next)=>{
    res.sendFile(html);
});
```

## 16. 주소가 같고 요청이 다른 경우

```javascript

```

```javascript | /routes/index.js

```
