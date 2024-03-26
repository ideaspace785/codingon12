const http=require('http')
const fs= require('fs')

const server=http.createServer((req,res)=>{
    try{
        const data=fs.readFileSync('index.html')
        res.writeHead(200);
        res.write(data)
        res.end

    }catch(err){
        console.error(err)
        res.writeHead(404)
        res.write(err.message)
        res.end
    }
})
   server.listen(8000, ()=>{
    console.log("server running.........")
   })
