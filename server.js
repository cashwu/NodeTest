
var http = require("http");

function start(){
    
    function onRequest(request, response) {

        response.writeHead(200, { "content-type" : "text/html" });
        response.write("<h1>Hello World</h1>");
        response.end();

    };

    http.createServer(onRequest).listen(1234);
    
    console.log("Server running at 1234 port");      
}

exports.start = start;