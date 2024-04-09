const express=require('express');
const app= express();
const PORT=3000;
const mysql=require('mysql2');

const conn= mysql.createConnection({
    host:"localhost",
    user: 'root',
    database: 'kdt',
    password:'1234'
})
let sql= 'Select *from customer'
conn.query(sql , function(err, rows, fields){
    if(err) console.log(err.message);
    else {
        console.log('연결 성공')
        console.log(rows[0].custname)
        console.log(fields)
    }
})
app.set('view engine', 'ejs');
app.set('views', './views');



app.use(express.urlencoded({extended:true}));
app.use(express.json);

// const userRouter= require('./router/user')
// app.use('/user', userRouter)


app.get('/', (req,res)=>{
    var sql= "insert into customer(custid, custname, addr,phone, birth) value(?,?,?,?,?) ";
    var values=['peach', '홀길동', '마포구에 살아요', '0102222222', '2000-09-22'] ;
    conn.query(sql, values, function(err, rows, fields){
        if(err){
            console.log(err);
            res.status(500).send("Internal server Error");
        }
    })
})

app.listen(PORT, ()=>{
    console.log(` ${PORT} server is running...`)
})

