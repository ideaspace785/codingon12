create database mybatisExer default character set utf8 default collate utf8_general_ci;
use mybatisExer;

-- users 테이블 생성
CREATE TABLE posts (
                               id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                               title VARCHAR(20) NOT NULL,
                               content VARCHAR(100) NOT NULL,
                               writer VARCHAR(10) NOT NULL,
                               registered TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- 더미 데이터 삽입
INSERT INTO posts (title, content, writer) VALUES
                                               ('First Post', 'This is the content of the first post', 'Alice'),
                                               ('Second Post', 'This is the content of the second post', 'Bob'),
                                               ('Third Post', 'This is the content of the third post', 'Charlie'),
                                               ('Fourth Post', 'This is the content of the fourth post', 'David'),
                                               ('Fifth Post', 'This is the content of the fifth post', 'Eve');

SELECT * FROM posts