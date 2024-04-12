const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/static', express.static(__dirname + '/static'));

//첫화면
const indexRouter = require('./routes/index')
app.use('/', indexRouter)

//404화면
app.get('*', (req, res) => {
    res.render('404')
})

app.listen(3000, () => {
    console.log('3000 server running...');
})