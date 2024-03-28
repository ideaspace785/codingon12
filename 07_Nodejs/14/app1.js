const express=require('express')
const app=express();
const PORT=8000;

app.listen(PORT, ()=>{
    console.log("Server running")
})

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.render('index', {title: 'HOME'})
})
app.get('/about', (req, res)=>{
    res.render('about', {title: 'ABOUT'})
})
app.get('/create', (req, res)=>{
    res.render('create', {title: 'CREATE'})
})