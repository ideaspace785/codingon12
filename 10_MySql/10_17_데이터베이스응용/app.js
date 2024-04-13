const express=require('express');
const { Sequelize } = require('sequelize');
const app= express();
const router=require('./routes')
const {sequelize}= require("./models")

app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/', router)

sequelize.sync({force:false}).then(()=>{
    app.listen(8000, ()=>{
        console.log('8000 server is runninig...');
    })
}).catch((err)=>{
    console.log(err);
})