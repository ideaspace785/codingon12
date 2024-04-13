const express=require('express');
const app= express();

app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.urlencoded({extended:true}))
app.use(express.json)


app.listen(8000, ()=>{
    console.log("8000 Server running")
})