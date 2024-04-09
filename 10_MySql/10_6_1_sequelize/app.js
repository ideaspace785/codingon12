const express = require('express');
const app = express();
const db = require('./models/index')

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const indexRouter=require('./routes');
app.use('/', indexRouter)

app.get("*", (req, res)=>{
    res.render('404')
})


db.sequelize.sync({force:false}).then(()=>{
    app.listen(8000, ()=>{
        console.log('8000 server runninig...');
    })
})