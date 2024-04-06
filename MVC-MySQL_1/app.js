// const express=require('express')
// const app=express();
// const PORT=3000;

// app.set('view engine', 'ejs');
// app.set('views', './views');
// app.use(express.urlencoded({extended:true}));
// app.use(express.json);


// const indexRouter=require('./routes')
// app.use('/', indexRouter)

// app.listen(PORT, ()=>{
//     console.log(`${PORT} is running`)
// })

const express = require('express')
const app = express()

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({extended :true}))
app.use(express.json())
app.use('/static', express.static(__dirname+"static"))


const indexRouter = require('./routes')
app.use('/', indexRouter)

app.listen(3000, ()=>{
    console.log(`3000`)
})