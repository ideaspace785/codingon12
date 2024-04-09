const express = require('express')
const app= express()
const PORT = 3000;
// multer관련설정
const multer = require('multer');
const path = require('path')
const upload = multer({dest : 'uploads/'})
// 불러오는 파일에 대한 정보
const uploadDetail = multer({
  storage:multer.diskStorage({
    destination(req,file,done){
      done(null,'uploads/')
    },
    filename(req,file,done){
      const ext=path.extname(file.originalname) // 확장자만
      console.log(path.basename(file.originalname,ext) ) // 파일이름만
      done(null, path.basename(file.originalname,ext) + Date.now() + ext)
    }
  }),
  limits:{
    fileSize: 5*1024*1024 // 5MB
  }
})
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.urlencoded({extended:true}));
app.use(express.json())
// 이미지경로 등록
app.use('/uploads', express.static(__dirname +'/uploads'))
app.get('/',(req,res)=>{
  res.render('form3')
})
app.post('/upload/fields', uploadDetail.fields([ {name:'userfile1' },{name:'userfile2' }  ]),(req,res)=>{
  console.log("dskjdnlc")
    res.send('한번에 한개씩 여러개')
})
app.post('/dynamic', uploadDetail.single('dynamicFile'), (req, res)=>{
    res.send({file: req.file, title: req.body.title})

})
app.listen(PORT, ()=>{
  console.log('서버실행 중')
})