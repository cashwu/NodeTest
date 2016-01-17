var http = require("http");
var url = require("url");

function start(route){
    
    function onRequest(request, response) {

        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received");
        console.log("Request url: " + request.url);

        route(pathname);

        response.writeHead(200, { "content-type" : "text/html" });
        response.write("<h1>Hello World</h1>");
        response.end();

    };

    http.createServer(onRequest).listen(1234);
    
    console.log("Server running at 1234 port");      
}

exports.start = start;