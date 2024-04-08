const express=require('express')
const app=express();
const PORT=8000;
const mysql=require('mysql2');

app.set('view engine', 'ejs')
app.set('views', './views')

const indexRouter = require('./routes')
app.use('/', indexRouter)

app.use(express.urlencoded({extended :true}))
app.use(express.json())
app.use('/static', express.static(__dirname + '/static'))

//404 page
app.get('*', (req, res)=>{
    res.render('404')
})

app.listen(PORT, ()=>{
    console.log(`${PORT} is running`)
})