const http=require("http")
const cookie=require('cookie');
http.createServer(function(req,res){
    let cookies={}
    if(req.headers.cookie !==undefined){
        cookies= cookie.parse(req.header.cookie)
        console.log(cookies)
    }
    res.writeHead(200, {
        'set-cookie': [
            `tasty_food=kimchi ; Max-Age=${600*20}`,
    

            'username=kdt',
            'password=1234',
            'DontReadhttp=myhttp; HttpOnly'
        ]
    })
    res.end('cookie3')
}).listen(8000)