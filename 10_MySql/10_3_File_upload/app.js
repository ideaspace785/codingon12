const express=require('express');
const app= express();
const multer=require('multer');
const upload=multer({dest: 'download/'})

const PORT=8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(`${PORT}`,()=>{
    console.log(`${PORT} Server is running...`)
} )

app.post('/upload',upload.single('demo'),(req, res)=>{
    req.file=req.file.originalname
    console.log('Original name:', req.file)
    res.send('uploaded')
})


app.get('/', (req,res)=>{
    // res.send('index') //index를 화면에 출력 
    res.render("form");
})



