const fs=require('fs');
fs.readFile('./blog.txt',(err,data)=>{ //Error Handler 넣어줘야한다.
    if(err){
        console.log(err.toString())
    }else{
        console.log(data.toString());
    }
})