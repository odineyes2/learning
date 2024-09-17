# app 개발 시 sequelize guide

## 1. mysql 에서 db, table 생성한다

## 2. sequelize 실행 및 설정 저장한다

## 3. mysql 연결객체 생성하기 => /models/index.js 생성

    1) 설치한 sequelize 를 처음으로 require 한다.
    2) db 객체를 만든다.
    3) 시퀄라이즈 생성자로 mysql 연결 객체(sequelize)를 생성한다.
    4) 연결 객체를 재사용하기 위해 db.sequelize에 넣어 둔다.

## 4. mysql 연결하기 => ./app.js

    ```javascript
    const { sequelize } = require('./models');

    sequelize.sync({force:false})
    .then(()=>{
        console.log('successfully db connected..');
    })
    .catch((err)=>{
        console.error(err);
    });

    // 다른 미들웨어 require
    // 라우팅
    // 서버 리슨
    ```

## 5. 모델, 관계 정의하기 => ./models/user.js & ./models/comment.js

## 6. 어플리케이션 코드에서 필요한 쿼리 작성

- user 테이블에 user를 조회, 삭제, 수정 하려면 models/user.js에서 user 모델을 불러와 sequelize 쿼리문을 사용하면 된다.

## 7. 서버 시작

- 서버를 시작하면 app.js 의 코드가 실행되면서 db.sequelize를 불러와서 sync 메서드를 사용함
- mysql 과 연동됨 이때 config/config.json 폴더의 정보를 이용하여 연동
- 이어서 다른 미들웨어와 라우팅이 작동되고 서버가 구동됨
