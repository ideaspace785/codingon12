const fs=require('fs');
//require module를 불러드릴 때 쓴다. 
 const data=fs.readFileSync('./blog.txt', 'utf-8');
 console.log(data);
 console.log("Another work");
 //text file 순서대로 나온다 
 //요청하고 결과를 받고 나서 출력
// abc 
// 123
// another work