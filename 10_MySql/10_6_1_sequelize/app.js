const express= require('express');
const { sequelize } = require('./models');
const app=express();

app.set('view engine', 'ejs')
app.set('view','./views')

app.use('/static', express.static(__dirname + '/static'))

app.use(express.urlencoded({extended:true}))
app.use(express.json())

db=sequelize.sync({force:false}).then(()=>{
    //force:false는 테이블이 없으면 생성한다는 의미
    
    app.listen(8000, ()=>{
        console.log("8000 server is running...")
    })
})
