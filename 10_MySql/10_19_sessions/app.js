const express = require('express');
const session = require('express-session');
const app = express();
const PORT = 9000
app.set('view engine', 'ejs');
app.set('views', './views');
// 첫홤ㄴ
app.get("/", (req,res)=>{
  res.render('session')
})
// /set  세션설정 요청
// secure : 값을 true로 하면 https 에서만 세션을 주고 받을 수 있다.
// secret: 안전하게 쿠키를 전송하기 위한 쿠키 서명값 (세션을 발급할때 사용되는 키)
// resave : 세션에 수정사항이 생기지 않더라고 매 요청마다 세션을 다시 저장할 것이지 결정, 권장은 false
// saveUninitialized: 세션에 저장할 내경이 없더라고 처음부터 세션을 생성할지 설정
// httpOnly : 웹서버를 통해서만 쿠키에 접근 가능
// maxAge 쿠기생명 단위는 밀리세컨드
// cookie() 에 maxAge 넣는다
app.use(session({
  secret: 'mySessionSecret',
  resave:false,
  saveUninitialized: true,
  cookie :{
    httpOnly: true,
    maxAge: 60*1000
  }
}))
app.get('/set', (req,res)=>{
 req.session.name ="김씨표류기";
 res.send('세션설정완료')
})
app.get('/name' , (req,res)=>{
 console.log(req.session.name)
 console.log(req.sessionID)
 console.log("req.session -->" , req.session)
 res.send({id: req.sessionID, name: req.session.name})
})
app.get('/destory',(req,res)=>{
  req.session.destroy( err=>{
    if(err)  {
      console.log('err');
      res.send('failed')
    }
    res.redirect('/name')
  })
})
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
})