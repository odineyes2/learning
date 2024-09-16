# 정답 코드

## http 복습 코드

```javascript

const http = requrie('http');

const server = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-type':'text/html; charset=utf-8'});
    res.write('<h1>Hello node<h1>');
    res.end('<p>Hello server</p>');
});
server.listen(8080, ()=>{
    console.log('8080 Port waiting...')
});
server.on('error', (error)=>{
    console.error(error);
});

```

```javascript

const http = require('http');
const fs = require('fs').promises;

const server = http.createServer(async (req,res)=>{
    try {
        const data = await fs.readFile('/server.html');
        res.writeHead(200, {'Content-type':'text/html; charset=utf-8'});        
        res.end(data);
    } catch (err) {
        console.error(err);
        res.writeHead(500, {'Content-type':'text/plain; charset=utf-8'});
        res.end(err.message);
    }
});

server.listen(8081, ()=>{
    console.log('8081 Port waiting...');
})

```

## 쿠키 구현 코드

```javascript

const http = require('http');
const fs = requite('fs').promises;

const server = http.createServer(await (req, res)=>{
    console.log(req.url, req.header.cookie);
    const date = async fs.readFile('./public/index.html');
    res.writeHead(200, {'Set-Cookie': 'mycookie=test'});
    res.end(data);
});

server.listen(8081, ()=>{
    console.log('waiting on Port: 8081...');
})

```

```javascript

const http = require('http');
const fs = require('fs').pormises;
const path = require('path');

const parseCookies = (cookie = '') =>{
    cookie
        .split(';')
        .map(v=>v.split('='))
        .reduce((acc, [k,v])=>{
            acc[k, trim()] = decodeURIComponent(v);
            return acc;
        },{});
}

const server = http.createServer(async (req,res)=>{
    const cookies = parseCookies(req.headers.cookie);
    if(...) {        
        const url = new URL(req.url, 'http://localhost:8084');
        const name = url.searchParams.get('name');
        const expires = new Data();

        expires.setMinutes(expires.getMinutes() + 5);
        res.writeHead(302, {
            Location : '/',
            'Set-Cookie' : `name=${encodeURLComponent(name)}; Expires=${expires.toGMTSting()}; HttpOnly; Path=/`,
        });
        res.end();
    } else if(cookie.name) {
        res.writeHead(200, {'Content-type': 'text/plain; charset=utf-8'});
        res.end(`${cookies.name}님 안녕하세요...`);
    } else {
        ...
    }
    
})

server.listen(8081, ()=>{
    console.log('8081 waiting on...')
})
```

## 세션 구현 코드

```javascript

const http = require('http');
const fs = require('fs').pormises;
const path = require('path');

const parseCookies = (cookie = '') =>{
    cookie
        .split(';')
        .map(v=>v.split('='))
        .reduce((acc, [k,v])=>{
            acc[k, trim()] = decodeURIComponent(v);
            return acc;
        },{});
}

const session = {};

http.createServe(async (req,res) => {
    const cookies = parseCookies(req.headers.cookie);
    if (req.url.startsWith('/login')) {
        const url = new URL(req.url, 'http://localhost:8085');
        const name = url.searchParams.get('name');
        const expires = new Data();
        expires.setMinutes(expires.getMinutes()+5);
        const uniqueInt = Date.now();
        session[uniqueInt] = {
            name,
            expires,
        };
        res.writeHead(302, {
            Location: '/',
            'Set-Cookie': `session=${uniqueInt}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
        });
        res.end();
    } else if (cookiees.session && session[cookies.session].expires > new Date()) {
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end(`${session[cookies.session].name}님 안녕하세요...`);
    } else {
        ...
    }
}).listen(8085, ()=>{
    console.log('Waiting on 8085 port...');
});


```

## express 셋업

- $ npm init -y
- $ npm i express
- $ npm i -D nodemon
- "start" : "nodemon app"
- $ npm i morgan cookie-parser express-session dotenv
- $ npm i sequelize sequelize-cli mysql2

## hello express

```javascript

const express = require('express');

const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res)=>{
    res.send(`Hello Express`);
})

app.listen(app.get('port'), ()=>{
    console.log(app.get('port', `waitng on..`));
});

```

```javascript

const express = require(express);
const path = require('path');
const html = path.join(__dirname, `/public/index.html`);

const app = express();

app.set('port', process.env.PORT || 3001);
app.get('/', (req,res)=>{
    res.sendFile(html);
})

app.listen(app.get('port'),()=>{
    console.log(`Waiting on port:${app.get('port')} ...`)
})
```

## 숙지해야 하는 미들웨어

### morgan

```javascript

const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(morgan('dev')); // 개발 환경
app.use(morgan('combined')); // 배포 환경
```

### static => express 에서 기본적으로 제공하는 미들웨어

```javascript

const path = require('path');

app.use('/', express.static(path.join(__dirname, 'public'))); 
// fs을 사용하지 않아도 되는 장점?
// 해당 경로에 해당 파일이 없으면 자동으로 next를 호출한다.
```

### body-parser

```javascript
app.use(express.json());
app.use(express.urlencoded({extended: false}));
```

- req의 본문에 있는 데이터를 파싱해서 req.body 객체로 만들어주는 미들웨어
- 폼데이터나 쿼리스트링을 처리한다.
- 따로 임포트할 필요는 없다.

### cookie-parser & dotenv

```javascript
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
app.use(cookieParser(process.env.COOKIE_SECRET)); 
// 모든 요청에 대해 쿠키 파서를 실행하라.
// 쿠키는 브라우저(클라이언트)에서 위조하기 쉽기 때문에 첫번째 인수로 비밀키를 입력한다.
// 쿠키를 보낼 때 동일한 비밀키로 생성한 서명을 붙이고 여기서 cookie-parser로 검증한다.
```

```javascript | .env
COOKIE_SECRET=cookiesecret
// 이렇게 파일을 만들어 놓으면 dotenv 패키지가 알아서 process.env에 입력해 놓는다.
// 소스코드에서 process.env에 직접 접근하면 보안상 좋지 않기 때문에 이렇게 한다.
```

### express-session

```javascript
const session = require('express-session');

app.use(session({
    resave: false,
    saveUninitialize: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly : true,
        secure: false,
    },
    name: 'session-cookie',
}));
// 세션 관리용 미들웨어이다.
// secret: 이 부분은 쿠키의 비밀키와 동일하게 한다.

```

## Router 객체

```javascript
const express = require('express');

const router = express.Router();

router.get('/', (req,res=>{
    res.send('Hello index');
}));

module.exports = router;
```

```javascript
const express = require('express');

const router = express.Router();

router.get('/', (req,res=>{
    res.send('Hello User');
}));

module.exports = router;
```

```javascript
const express = require('express');
const indexRouter = require('./routes');
const userRouter = require('./routes/user');
const app = express();

app.use('/', indexRouter);
app.use('/user',userRouter);
app.user((req,res,next)=>{
    res.status(404).send("Not Found...");
})

app.listen(3000, ()=>{
    consold.log(`Waiting on 3000...`);
});
```

## 동적 라우팅

```javascript
const express = require('express');
const userRouter = require('./routes/user')
const router = express();

router.use('/user', userRouter);

```

```javascript
const express = require('express');
const router = express.Router();

router.use('/:id', (req,res)=>{
    conosole.log(req.params);
    res.send(`This page is for ${req.params.id}`);
});

module.exprots = router;
```

## 주소가 같고 요청이 다른 경우의 코드

```javascript
router.get('/', (req,res)=>{
    res.send('GET /abc');
});

router.post('/', (req,res)=>{
    res.send('POST /abc');
});
```

```javascript
router.route('/')
.get((req,res)=>{
    res.send('GET /abc');
})
.post((req,res)=>{
    res.send('POST /abc');
});
```

## 우분투 리눅스(cli)에서 mysql 설치하고 root 계정으로 접속하기

- $ sudo apt-get update
- $ sudo apt-get install -y mysql-server-8.0
- $ sudo mysql
- > ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_natove_password by 'password';
- > exit;
- $ sudo mysql_secure_installation
- $ mysql -h localhost -u root -p

## mysql - 데이터베이스 생성하기

```sql
CREATE SCHEMA 'nodejsDB' DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_general_ci;
use nodejsDB;
```

## mysql - 테이블 생성하기, 조회하기, 삭제하기

### 유니크 필드 지정하기

### 외래키 및 외래키 조건 설정하기

```sql
> CREATE TABLE nodejsDB.users (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    age INT UNSIGNED NOT NULL,
    married TINYINT NOT NULL,
    comment TEXT NULL,
    created_at DATETIME NOT NULL DEFAULT now(),
    PRIMARY KEY(id),
    UNIQUE INDEX name_UNIQUE (name ASC) --해당 필드가 유니크해야 하는지
)
    COMMENT = '사용자 정보'
    ENGINE = InnoDB;
> DESC users;
> DROP TABLE users;

> CREATE TABLE nodejsDB.comments (
    id INT NOT NULL AUTO_INCREMENT,
    commenter INT NOT NULL,
    comment VARCHAR(100) NOT NULL,
    created_at DATETIME NOT NULL DEFAULT now(),
    PRIMART KEY(id),
    INDEX commenter_idx (commenter ASC),
    CONSTRAINT commenter -- 제약조건명
    FOREIGN KEY (commenter) -- 다른 테이블의 기본키를 저장하는 컬럼(FK)
    REFERENCES nodejsDB.users(id) -- 참고하는 컬럼명
    ON DELETE CASCADE -- 사용자 정보가 삭제되면 연결된 댓글 정보도 삭제
    ON UPDATE CASCADE -- 사용자 정보가 수정되면 연결된 댓글 정보도 수정
)
    COMMENT = '댓글'
    ENGINE = InnoDB;   
> SHOW TABLES;
```

## CRUD

### C - user 테이블에 데이터 넣기

```sql
> INSERT INTO nodejsDB.users (name, age, married, comment) VALUES (
    'kim', 24, 0, '자기소개1'
)
```

### R - user 테이블에 자료 조회, 특정컬럼만 조회, 조건별로 조회, 로우 개수 제한하여 조회, 건너뛰기

```sql
> SELECT * FROM nodejsDB.users;
> SELECT name, married FROM nodejsDB.users;
> SELECT * FROM nodejsDB.users WHERE married = 1 AND age > 30;
> SELECT * FROM nodejsDB.users WHERE married = 1 AND age > 30 LIMIT 3;
> SELECT * FROM nodejsDB.users WHERE married = 1 AND age > 30 LIMIT 3 OFFSET 3;
```

- OFFSET 은 페이지 구분을 구현하기 위한 기능

### U - 데이터 수정하기

```sql
> UPDATE nodejsDB SET comment = '자기소개2' WHERE id = 2; 
```

### D - 데이터 삭제하기

```sql
> DELETE FROM nodejs.users WHERE id = 2;
```

## Sequelize 자료형

- VARCHAR(100) : STRING(100)
- INT : INTEGER
- TINYINT : BOOLEAN
- DATETIME : DATE
- INT UNSIGNED : INTEGER.UNSIGNED
- NOT NULL : allowNull: false
- UNIQUE : unique: true
- DEFAULT NOW() : defaultValue: Sequelize.NOW

### 초기 셋팅

```javascript / models/index.js
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);
db.squelize = sequelize;

module.exports = db;
```

- sequelize 패키지를 npm 에서 설치한다.
- 프로젝트 별로 sequelize 를 설치해야 한다.
- config/config,json 에서 데이터베이스 설정을 불러온 후 new Sequelize 생성자 함수를 통해 MySql 연결 객체를 생성한다.
- db.sequelize 에 할당한다.

## mysql 연결하기

``` javascript | app.js

const express = require('express');
const path = require('path');
const morgan = require('morgan');

const {sequelize} = require('./models');

const app = express();

app.set('port', process.env.PORT || 3001 );

sequelize.sync({force: false}) // 서버와 mysql 연결 메서드
.then(()=>{
    console.log('데이터베이스 연결 성공');
})
.catch((err)=>{
    console.error(err);
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), ()=>{
    console.log(app.get('port'));
});

```

- force: true 면 서버를 실행할 때마다 테이블을 재생성
- /config/config.json 정보를 사용하여 연동

```json
{
    "development":{
        "username":"root",
        "password":"password",
        "database":"nodejsDB",
        "host":"127.0.0.1"
        "dialect":"mysql"
    }
}
```

## 모델 정의하기

```javascript | models/user.js

const Sequelize = require('sequelize');

class User extends Sequelize.Model {
    static initiate(sequelize) {
        User.init({
            name: {
                type: Sequelize.STRING(20),
                allowNull: false,
                unique: true,
            },
            age: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: false,
            },
            married: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            comment: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            created_at: {
                type: Sequelize.TEXT,
                allowNull: false,
                defaultValue: Sequelize.NOW,
            },            
        },{
            sequelize,
            timestamp: false,
            underscore: false,
            modelName: 'User',
            tableName: 'users',
            paranoid: false,
            charset: utf8,
            collate: 'utf8_general_ci',
        });
    }

    static associate(db) {
        db.User.hasMany(db.Comment, {foreignKey: 'commenter', sourceKey: 'id'});
    }
};

module.exports = User;

```

- mysql 에서 생성했던 테이블을 시퀄라이즈에서도 정의해야 한다.
- mysql 에서 테이블 => 시퀄라이즈에서 모델
- id 는 적지 않아도 된다.
- 자료형에 차이점이 있다.
- 테이블 옵션

```javascript | models/comment.js
    static associate(db){
        db.Comment.belongsTo(db.User, {foreignKey: 'commenter', targetKey:'id'})
    }
```

## 정의한 모델 연결하기

```javascript | models/index.js

const Sequelize = require('sequelize');
const User = require('./user');
const Comment = require('./comment');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);
db.squelize = sequelize;

db.User = User;
db.Comment = Comment;

User.initiate(sequelize);
Comment.initiate(sequelize);

User.associate(db);
Comment.associate(db);

module.exports = db;

```

- 모든 설정이 끝나고 npm start 를 실행하면 정의해준대로 SQL문을 자동 생성하여 실행한다.
- 테이블을 생성, 구조를 정의함

## 시퀄라이즈 - 관계

## 시퀄라이즈 방식으로 CRUD - C

```sql
> INSERT INTO nodejsDB.users (name, age, married, comment) VALUES ('kim', 38, 1, 'hi');
```

``` javascript
const { User } = require('../models');
User.create({
    name: 'kim',
    age: 38,
    married: true,
    comment: 'hi',
});
```

## 시퀄라이즈 방식으로 CRUD - R

```sql
> SELECT * FROM nodejsDB;
> SELECT * FROM nodejsDB LIMIT 1;
> SELECT name, age FROM nodejsDB;
> SELECT name, age FROM nodejsDB WHERE married = 1 AND age > 30;
> SELECT id, name FROM nodejeDB WHERE married = 1 ORDER BY age DESC LIMIT 2 OFFSET 1;
```

```javascript
User.findAll({});
User.findOne({});
User.findALL({
    attribute: ['name', 'age'],
});
User.findAll({
    attribute: ['name', 'age'],
    where: {
        married: true,
        age: {[Op.gt]: 30},
    },
});
USER.findAll({
    attribute: ['id', 'name'],
    where: {
        married: true,
    },
    order: [['age','DESC']],
    limit: 2,
    offset: 1,
});
```

## 시퀄라이즈 방식으로 CRUD - U

```javascript
// UPDATE nodejsDB.users SET comment = 'hello' WHERE id = 2;
User.update({
    comment: 'hello',
},{
    where: {id:2},
});
```

## 시퀄라이즈 방식으로 CRUD - D

```javascript
// > DELETE FROM nodejsDB.users WHERE id = 2;
User.destroy({
    where: {id: 2},
});

```

## 관계 쿼리** - 특정사용자를 가져오면서 그 사람의 댓글을 모두 가져오고 싶은 경우

```javascript

const user = await User.findOne({
    include: [{
        model: Comment,
        where: {
            id: 1,
        },
        attribute: ['id'],
    }];
});
)
```

```javascript

const comments = await user.getComments({
    where: {
        id: 1,
    },
    attributes: ['id'],
});

```

## SQL 쿼리 직접 실행

##