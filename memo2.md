# title

## structure

- mysql db server <===> express api server sequelize
- express api server <===> Next frontend
- openai complete Api <===> express api server [?]

## next frontend 만들기

- router

## express api server 만들기

- 

## express <===> db 연결하기

## mysql setting => 가상 환경에서 작동되지 않음...ㅜ

- $ sudo apt-get update
- $ sudo apt-get install -y mysql-server-8.0
- $ sudo mysql => 안됨

## express

- $ npm i express morgan nunjucks sequelize sequelize-cli
- $ npm i cookie-parser express-session multer dotenv
- $ npm i mysql2
- $ npm i -D nodemon
- $ npx sequelize init

## 로그인 기능 구현하기 (Passport 모듈)

- $ npm i passport passport-local passport-kakao bcrypt