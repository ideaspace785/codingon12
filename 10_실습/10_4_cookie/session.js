const express=require('express')
const app=express();
const session=require('express-session')

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(session({
    secret:"mySecretSession",
    resave:false,
    saveUninitialized:false,
    cookie:{
        httpOnly:true,
        maxAge:20*1000
    }
}))

app.get('/', (req,res)=>{
    res.render('session')
})
app.get('/set',(req,res)=>{
    req.session.name='홍길동';
    res.send('세션 설정 완료!')
})
app.get('/name', (req,res)=>{
    console.log(req.session);
    res.send({id:req.sessionID, name:req.session.name});
})

app.get('/destroy', (req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            console.log(err)
        }else{
            res.redirect('/name');
        }
    })
})


app.listen(8000, ()=>{
    console.log("Server running")
})