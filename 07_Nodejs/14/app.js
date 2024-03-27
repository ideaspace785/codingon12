const express=require('express')
const app= express();
const PORT=8000;



app.set("view engine", 'ejs');
app.set('views', './views');


app.get('/about', (req, res)=>{
    res.render("about", {title:'About'})
})


app.get('/', (req,res)=>{
    res.render("index", {title:'HOME'})
    // rendering: 보낸코드를 HTML인지 확인하고 , 그 페이지에 필요한 css 파일 등을 요청해서 페이지를 그려준다. 
})
app.get('/create', (req, res)=>{
    res.render("create", {title:'작성하기'})
})
app.use(PORT, ()=>{
    res.status(404).render("404")
})
app.listen(PORT, ()=>{
    console.log(`Server is running ${PORT}`)
})