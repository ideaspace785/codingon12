const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userInfo = { id: "홍길동", pw: "1234" };

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/practice', (req,res)=>{
    res.render('practice')
})
//Axios get 방식
app.get('/axios1', (req, res) => {
    console.log(req.query);
    res.send(req.query);
})

app.post('/login', (req, res) => {
    const { id, pw } = req.body;
    console.log("input:",id, pw)
    const { id: realId, pw: realPw } = userInfo;
    if (id === realId && pw === realPw) {
        console.log("Login success")
        res.send(req.body);
        
    } else {
        res.send(function alert(){
            alert("비번 틀렸습니다")
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
