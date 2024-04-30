const express=require('express')
const app=express();
const cookieParser=require("cookie-parser")


app.set('view engine', 'ejs')
app.set('views', './views')

app.use(cookieParser('mySecretKey'))
const cookieConfig={
    httpOnly:true,
    maxAge:60*1000,
    signed:true
}

app.get('/', (req,res)=>{
    res.render('cookie')
})
app.get('/setCookie', (req, res)=>{
    res.cookie('myCookie', 'IcanseeValue', cookieConfig) 
    res.send('set cookie!')
})

app.get('/getCookie', (req, res)=>{
    // res.send(req.headers.cookie) 암호화 하지 않는 쿠키
    res.send(req.signedCookies)
})

app.get('/clearCookie', (req,res)=>{
    res.send('clear cookie!')
})

app.listen(8000, ()=>{
    console.log("Server running")
})