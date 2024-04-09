const express= require('express');
const app= express();
const PORT=8000;

app.set('view engine', 'ejs');
app.set('views', './views');


app.set(express.urlencoded({extended:true}));
app.set(express.json());

const indexRouter= require('./routes/index'); //미들웨어 불러오기 
app.use('/', indexRouter)

const userRouter= require('./routes/user');
app.use('/user', userRouter)



// app.get('*', (req, res)=>{
//     res.render('404')
// })
// 위와 같은 내용이지만 다른 방법으로는 
app.use('*', (req, res)=>{
    res.status(404).render('404')
})// 404error을 항상 마지막에 둔다. 이전에 적으면 *로 인해 이후의 다른 get 내역을 찾을수가 없다. 

app.listen(PORT, ()=>{
    console.log(`${PORT} 번 서버 실행 중`)
})

