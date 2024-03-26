const http_ex=require('http');
// console.log(http_ex)

const server= http_ex.createServer();
server.listen(3000);
console.log("3000 포트가 열렸습니다.")
//http://127.0.0.1:8000/