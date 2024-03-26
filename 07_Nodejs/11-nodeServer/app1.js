const http=require('http')
http.createServer(function(request, response){
    //Send http header, http status,content type 
    // response.writeHead(200, {'Content-type': 'text/plain'})
    response.writeHead(200, {'Content-type': 'text/html'})
    response.end(`<h2>Hello World </h2>`);
}).listen(3000);