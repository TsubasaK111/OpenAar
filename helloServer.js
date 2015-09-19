var http = require('http');
debugger;
http.createServer(function(req,res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  debugger;
  res.end('Supz, World! (hugs) \n');
}).listen(1337, '127.0.0.1');
debugger;
console.log("Ey yoyoyoyo yo Server's running @ http://127.0.0.1:1337/");
