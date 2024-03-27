//fs File system -파일 입출력
//http: 서버 만들기

//npm init -y (-y는 모든 것이 Y 로 해주겠다)

//서버 만들기
const express=require('express')
const app=express();
app.listen(8000, ()=>{
    console.log("8000port 운행중")
})

//뭔가 받아드릴때
app.get('/', (req,res)=>{
    res.send(`<h2>Home page express </h2>`)
})
app.get('/about', (req,res)=>{
    res.send(`<h2>About page express </h2>`)
})

