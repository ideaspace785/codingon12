const express=require('express');
const { userInfo } = require('os');
const app=express();
app.set('view engine' , 'ejs')
app.set('views', './views')
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/', (req, res)=>{
    console.log("루트에서 돌아옴")
    res.render('index')
})

app.get('/login', (req, res)=>{
    console.log('login page home')
    console.log(req.query); //{객체 형태로}
    res.render('result', {title:"GET 요청" ,userInfo:req.query})
})
app.post('/login', (req, res)=>{
    console.log('login에서 post 방식으로 나옴')
    console.log('reqBody: '. req.body);
    res.render('result', {title: "POST login 화면", userInfo:req.body})
})

app.post('/js-form-check', (req, res)=>{
    console.log(req.body)
    res.send('js validation success')
})

app.listen(3000, (req, res)=>{
    console.log("3000 port Server running")
})