const { Socket } = require("dgram")
const hhtp_ex=require("http")
const server=http_ex.createServer()
server.on('connection', (Socket)=>{
    console.log('new connect')
})
server.listen(8000)
console.log("8000 열렸다.")