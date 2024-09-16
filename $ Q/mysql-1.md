# mysql

## 1. mysql prompt 접속 명령어

- $ mysql - h localhost -u root -p

## 2. 데이터베이스 생성

- > CREATE SCHEMA 'nodejsDB' DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_general_ci;
- > use nodejsDB;

## 3. 테이블 모두 보기

- > SHOW TABLES;

## 4. users 테이블 생성 하기

```sql
> CREATE TABLE nodejsDB.users(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    age INT UNSIGNED NOT NULL,
    married TINYINT NOT NULL,
    comment TEXT NULL,
    created_at DATETIME NOT NULL DEFAULT now(),
    PRIMARY KEY (id),
    UNIQUE INDEX name_UNIQUE(name ASC))
    COMMENT = '사용자 정보'
    ENGINE = InnoDB;
```

## 5. users 테이블 삭제하기

```sql
> DROP TABLE nodejsDB.users;
```

## 6. comments 테이블 생성하기

```sql
> CREATE TABLE nodejsDB.comments (
    id INT NOT NULL AUTO_INCREMENT,
    commenter INT NOT NULL,
    comment VARCHAR(100) NOT NULL,
    created_at DATETIME NOT NULL DEFAULT now(),
    PRIMARY KEY(id),
    INDEX commenter_idx (commenter ASC),
    CONSTRAINT commenter
    FOREIGN KEY (commenter)
    REFERENCES nodejsDB.users(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
    COMMENT = '댓글'
    ENGINE = InnoDB;
```

## 7. 테이블에 자료 입력하기

```sql
> INSERT INTO nodejsDB.users (name, age, married, comment) VALUES ( 'Jeonghun', 38, 1, '자기소개');
> INSERT INTO nodejsDB.users (name, age, married, comment) VALUES ( 'Narae', 33, 1, '자기소개2');
> INSERT INTO nodejsDB.comments (commenter, comment) VALUES ( 1, '정훈의 댓글');
```

## 8. 테이블 조회하기

```sql
> SELECT * FROM users;
> SELECT name, age FROM nodejsDB.users WHERE married = 1 AND age > 34;
> SELECT name, age FROM nodejsDB.users ORDER BY age DESC LIMIT 1 OFFSET 1;
```

## 9. 테이블 수정하기

```sql
> UPDATE nodejsDB.users SET married = 1 WHERE id = 1;
```

## 10. 테이블의 데이터 삭제하기

```sql
> DELETE FROM nodejsDB.users WHERE ID = 2;
```
