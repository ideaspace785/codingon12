const express = require('express')
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.set('view engine', 'ejs')
app.set('views', 'views')



app.get('/', (req, res) => {
    res.render('index')
})

app.listen(8000, () => {
    console.log("8000 port 실행 중")
})


//Ajax 방식
app.get('/ajax', (req, res) => {
    console.log(req.query);
    res.send(req.query);
})

app.post('/ajax', (req, res) => {
    console.log(req.body);
    res.send(req.body)
        ;
})

//Axios 방식
app.get('/axios', (req, res) => {
    console.log(req.query);
    res.send(req.query);
})

app.post('/axios', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

//fetch 방식
app.get('/fetch', (req, res) => {
    console.log(req.query);
    res.send(req.query);
})
app.post('/fetch', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})