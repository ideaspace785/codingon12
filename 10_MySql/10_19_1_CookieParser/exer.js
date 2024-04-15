const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
app.set("views", "./views");
app.set("view engine", "ejs");
const cookieConfig2 ={
  path:"/abc",
  maxAge : 60*1000,
  httpOnly: true,
}
const cookieConfig ={
  maxAge : 60*1000,
  httpOnly:true,
  signed: true,
}
app.use(cookieParser("secret key"));
app.get('/',(req,res)=>{
  res.render('cookie')
})
app.get('/setCookie' ,(req,res)=>{
  res.cookie('myCookie','cookiegood',cookieConfig )
  res.send('쿠키설정 완료')
})
app.get('/getCookie', (req,res)=>{
  console.log('얻어온 암호화 되지 않은 쿠키 : ',req.cookies)
  console.log('얻어온 암호환된 쿠키 : ',req.signedCookies)
})
app.get('/abc', (req,res)=>{
  res.cookie('abc-page','abc page cookie ' , cookieConfig2);
  res.render('another')
} )
app.get('/clearCookie',(req,res)=>{
  res.clearCookie('myCookie','cookiegood',cookieConfig )
  res.send('clear cookie')
})
app.listen(8000, ()=>{
  console.log('8000 서버')
})