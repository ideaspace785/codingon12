const fs=require('fs');
 fs.readFile('./blog.txt', "utf-8", (err,data)=>{
    if(err)throw err;
    console.log(data)
 })
 console.log("Another work");
 //요청을 보내고 나서 본인 할거 한다 . 그러므로 Another work 문구가 먼저 출력이 된것이다. 
 //output
//  Another work
//  abc
//  123