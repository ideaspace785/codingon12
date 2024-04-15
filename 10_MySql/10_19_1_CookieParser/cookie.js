const express=require('express');
const cookieParser=require('cookie-parser')
const app=express();

app.set('view engine', 'ejs')
app.set('views', './views')

//cookieparser는 미들웨어 등록해서 사용하기
//app.use(cookieParser())

app.use(cookieParser("secretKey"))





//쿠키에 사용될 내용을 따로 설정
const cookieConfig={
    maxAge: 60*1000,
    httpOnly: true,
    signed:true,
}

app.get('/', (req, res)=>{
    console.log('Cookie.ejs called')
    res.render('cookie')
})

app.get('/setCookie', (req, res)=>{
    res.cookie('myCookie', 'cookiegood', cookieConfig);
    res.send('쿠키설정완료')
})
app.get('/getCookie', (req, res)=>{
    console.log("얻어온 쿠키:", req.cookies)
    console.log("암호화된 쿠키:", req.signedCookies)
})
app.get('/clearCookie', (req, res)=>{
    res.cookie('myCookie', 'cookiegood', cookieConfig);
    res.send('clear cookie')
})

/** 암호화 되지 않은 일반적인 경우
 * 1. cookie-parser 사용
 * 2. app.use(cookieParser()) 미들웨어 등록
 * 3. res.cookie(이름 , 값, 옵션) ->쿠키 설정
 * 4. req.cookies() 쿠키값 확인
 * 5. res.clearCookie(이름 , 값, 옵션 )
 */




/** 암호화되는 경우
 * 2. app.use(cookieParser(임의의 문자열)) 
 * 옵션에 signed:true
 */
app.listen(8000, ()=>{
    console.log("Server running")
})