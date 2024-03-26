const http=require('http')
const server=http.createServer(function(request, response){
    response.writeHead(200);
    var _url=request.url;
response.write(`<h1>Hello World </h1>`);
    response.end(`<p>End~~~~~~~~~ ${_url}</p>`);
})

server.listen(8000, function(){
    console.log("8000 connected");
})