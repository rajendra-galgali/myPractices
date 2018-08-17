var express = require('express');
var app = express();
//var PORT = 1998;
//app.use(express.static('app'));
//app.use('/lib',  express.static('node_modules'));
process.env.NODE_ENV = 5060;
/*app.listen(process.env.NODE_ENV, function(){
    console.log('listening .....' +PORT)
});*/

var  callBack = function(req, res){
    console.log("req>>>", req.method);
    req.method='POST';

    res.writeHead(200, {'Content-Type':'text/plain'})
    //console.log("res>>>",);
    res.end('hey hello')

}
app.get('/update', (req, res) => {
    res.send({'name':'veena'}).status(200)
})

var http = require('http');
var server = http.createServer(app);

server.listen(process.env.NODE_ENV, function(){
    console.log("listening to HTTP_PORT.....",process.env.NODE_ENV )
});






/*
console.log("process>>>>>>", process.env)*/
