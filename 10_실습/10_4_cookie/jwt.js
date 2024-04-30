const express = require('express')
const app = express();
const jwt=require('jsonwebtoken')
const SECRET = '9PBYbnIhfXEVQdeXrvPWrX6ydDAJkIqVdfjfsahf'
const userInfo={id:'banana', pw:"1234", name:'홍길동', age:29}

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/login',(req, res)=>{
    res.render('login')
})

app.post('/login', (req, res)=>{
    const {id, pw}=req.body
    const {id:realId, pw:realPw} = userInfo
    if(id==realId && pw === realPw){
        const token=jwt.sign({id:id}, SECRET)
        res.send({isLogin:true, token})
    }else{
        res.send({isLogin:false, msg:"로그인 정보가 없습니다"})
    }
})

app.post('/token', (req, res) => {
    console.log("token > ", req.headers.authorization);
    if (req.headers.authorization) {
        const authorization=req.headers.authorization.split(' ');
        const token=authorization[1];
        try{
            const result=jwt.verify(token, SECRET)
            if(result.id===userInfo.id){
                res.send({isVerify:true, name: userInfo.name});
            }else{
                res.send({isVerify: false ,msg:"잘못된 접근입니다"})
            }

        }catch(err){
            console.log("verify err>", err);
            req.sessionID({isVerify:false, msg: "인증된 회원이 아닙니다!"})
        }
    } else {
        res.redirect('/login')
    }
})

app.listen(8000, () => {
    console.log("Server running")
})