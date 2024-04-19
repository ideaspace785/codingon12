const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const PORT = 8000;
app.set('view engine', 'ejs')
app.set('views', './views')
//Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
//Middleware
app.use(cookieParser())
const cookieConfig = {
    maxAge: 24 * 60 * 60 * 1000
}
app.get('/', (req, res) => {
    console.log('req.cookie.popup', req.cookies.popup)
    res.render('index', { popup: req.cookies.popup })
})
app.post('/setCookie', (req, res) => {
    //쿠키 설정을 생성해서 
    res.cookie('popup', 'hide', cookieConfig)
    res.send('쿠키 설정 성공')
})
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})