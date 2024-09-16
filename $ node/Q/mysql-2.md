# sequelize

## 1. sequelize 설치

## 2. sequelize 실행하기



## 3. ./config/config.json 수정



## 4. ./models/index.js 수정

```javascript

```

## 5. package.json 실행 명령어 등록

```json

```

## 6. mysql 연결하기 => /app.js

```javascript

```

## 8. comment 모델 정의하기 => /models/comment.js

```javascript

```

## 9. ./models/index.js 에 모델 연결하기

```javascript

```

## 10. 관계 정의하기 1:N id 와 comment

```javascript ./models/user.js
    
```

```javascript ./models/comment.js
   
```

## 11. 관계 정의하기 1:1 => id 와 UserId

```javascript /models/user.js

```

```javascript /models/info.js

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

## 22. 시퀄라이즈 CRUD 프로젝트
