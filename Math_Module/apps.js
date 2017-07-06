var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response){
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/') {
        fs.readFile('index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    //connect a .css file
    else if(request.url === '/stylesheets/stylez.css'){
        fs.readFile('./stylesheets/stylez.css', 'utf8', function(errors, contents){
         response.writeHead(200, {'Content-type': 'text/css'});
         response.write(contents);
         response.end();
        });
    }
    // request didn't match anything:
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
var mathlib = require('./mathlib')();
mathlib.add(2,6);
mathlib.multiply(6,6);
mathlib.square(3);
mathlib.random(3,980);
// tell your server which port to run on
server.listen(6789);
