const express=require('express');
const app= express();
const PORT=3000;

app.set('view engine', 'ejs');
app.set('views', './views');


app.use(express.urlencoded({extended:true}));
app.use(express.json);


const userRouter= require('./router/user')
app.use('/user', userRouter)


app.get('/', (req,res)=>{
    res.render('index')
})




app.listen(PORT, ()=>{
    console.log(` ${PORT} server is running...`)
})

