const express = require('express');
const app = express();
const PORT = 8090;
const multer = require('multer');

app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/download', express.static('download'))
app.use(express.json());
app.use(express.urlencoded({extended:true}))

const example = multer({
    storage: multer.diskStorage ({
        destination(req,file,done){
            done(null,'download/')
        },
        filename(req,file,done){
            file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf-8')
            done(null, file.originalname)
        }
    })
})

app.get('/', (req,res)=>{
    res.render('form2')
})

// app.post('/upload2', example.single('demo'), (req,res)=>{
//     console.log('req.file--->', req.file);
//     res.render('result2') 
// })
app.post('/upload2', example.array('demo'), (req,res)=>{
    console.log('req.file--->', req.files);
    console.log( '여러개 중에 첫번째 파일만: ', req.files[0].filename)
    res.render('result2', {filecount:req.files.length, filenames: req.files})
})

app.listen(PORT, ()=>{
    console.log(`${PORT} 서버 실행 중`);
})