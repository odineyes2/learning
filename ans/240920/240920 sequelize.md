# sequelize

## 1. sequelize 설치

- $ npm i sequelize sequelize-cli mysql2

## 2. sequelize 실행하기

- $ npx sequelize init

## 3. ./config/config.json 수정

## 4. ./models/index.js 수정 = mysql 연결 객체 만들기

```javascript
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || "development";

const config = require('../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);

db.sequelize = sequelize;
```

## 5. package.json 실행 명령어 등록

```json

```

## 6. mysql 연결하기 => /app.js

```javascript
const {sequelize} = require('./module');

sequelize.sync({force:false})
.then{

}
.catch(err){

}
```

## 7. user 모델 정의하기 => /models/user.js

```javascript
const Sequelize = require('sequelize');

class User extends Sequelize.Model {
    static initiate(sequelize){
        User.init(
            {
                name: {
                    Sequelize.STRING(20),
                    allowNull: false,
                    unique: true,
                },
                age: {
                    type: Sequelize.INTEGER.UNSIGNED,
                    allowNull: false,
                },
                married: {
                    type: Sequelize.BOOLEAN,
                    allowwNull: false,
                },
                comment: {
                    type: Sequelize.TEXT,
                    allowNull: true,
                },
                created_at: {
                    type: Sequelize.DATE,
                    allowNull: false,
                    defaultValue: Sequelize.NOW,
                },
            },
            {
                sequelize,
                timestamps: false,
                underscored: false,
                modelName: "User",
                tableName: "users"  
                paranoid: false,
                charset: "utf8",
                collate: "utf8_general_ci",              
            }
        );
    }

    static associate(db){
        db.User.hasMany(db.Comment, {foreignKey: "commenter", sourceKey: "id"});
    }    
}

module.exports = User;
```

## 7.1. Sequelize 자료형

VARCHAR(20) : STRING(20)
INT UNSIGNED : INTEGER.UNSIGNED
TINYINT : BOOLEAN
DATETIME : DATE
NOT NULL : allowNull: false
DEFAULT NOW() : defaultValue: Sequelize.NOW

## 8. comment 모델 정의하기 => /models/comment.js

```javascript
const Sequelize = require('sequelize');

class Comment extends Sequelize.model {
    static initiate(sequelize){
        Comment.init(
            {                
                comment: {
                    type: Sequelize.STRING(140),
                    allowNull: false,
                },
                created_at: {
                    type: Sequelize.DATE
                    allowNull: false,
                    defaultValue: Sequelize.now(),
                }
            },
            {
                sequelize,
                timestamps: false,
                modelName: "Comment",
                tableName: "comments",
                paranoid: false,
                charset: "utf8mb4",
                collate: "utf8mb4_general_ci",
            }
        )
    }
    static associate(db){
        db.Comment.belongsTo(db.User, {foreignKey: "commenter", targetKey: "id"});
    }
}

module.exports = Comment;
```

## 9. ./models/index.js 에 모델 연결하기

```javascript
const User = require('./user');
const Comment = require('./comment');
...

db.User = User;
db.Comment = Comment;

User.initiate(sequelize);
Comment.initiate(sequelize);

User.associate(db);
Comment.associate(db);

module.exports = db;
```

## 10. 관계 정의하기 1:N id 와 comment

```javascript ./models/user.js
db.User.hasmany(db.Comment, {foreignKey: "", sourceKey: ""})
```

```javascript ./models/comment.js
db.Comment.belongsTo()
```

## 11. 관계 정의하기 1:1 => id 와 UserId

```javascript /models/user.js
db.User.hasOne(db.Comment,{})
```

```javascript /models/info.js
db.Comment.hasOne(db.User,{})
```

## 12. 관계 정의하기 N:M => post 와 hashTag

```javascript

```

```javascript

```

## 13. 시퀄라이즈 CRUD - C

```javascript
// sql : INSERT INTO nodejsDB.users (name, age, married, comment) VALUES ('Jeonghun', 38, 1, '남편');
```

## 14. 시퀄라이즈 CRUD - R

```javascript
//SELECT name,age FROM nodejsDB.users WHERE married = 1 AND age > 30 ORDER BY age ASC LIMIT 1 OFFSET 1;
```

## 15. 시퀄라이즈 CRUD - U

```javascript
// UPDATE nodejsDB.users SET comment = '나래의 남편' WHERE id = 1;
```

## 16. 시퀄라이즈 CRUD - D

```javascript
// DELETE FROM nodejsDB.users WHERE id = 2;
```

## 17. 관계 쿼리 => 특정 유저를 조회하면서 그 유저를 댓글도 같이 조회

```javascript => include 속성

```

```javascript => getter 메서드

```

## 18. 관계 쿼리를 이용해서 CRUD - C => addComment, addComments

```javascript

```

## 19. 관계 쿼리를 이용해서 CRUD - U => setComments

## 20. 관계 쿼리를 이용해서 CRUD - D => removeComments

```javascript

```

## 21. SQL 직접 쿼리

```javascript

```
