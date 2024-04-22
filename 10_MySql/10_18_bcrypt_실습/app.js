const express = require('express');
const dotenv = require('dotenv');
const cookieParser=require('cookie-parser');
const session=require('express-session');
dotenv.config();

const app=express();
const db=require('./models');
const PORT=process.env.PORT || 8000;


app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())

app.use(
    session({
        secret:'mySession',
        resave:false,
        saveUninitialized:true,
        cookie:{
            httpOnly:true,
            maxAge: 60*1000, //1분
        },
    }))

const userRouter=require('./routes/user')
app.use('/', userRouter)

app.get('*', (req,res)=>{
    res.render('404')
})

//force 생성 여보 
db.sequelize.sync({ force: false }).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`http://localhost:${PORT}`);
    });
})
