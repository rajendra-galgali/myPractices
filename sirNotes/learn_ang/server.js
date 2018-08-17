var express = require('express');

var app = express();

var PORT = 3002;

app.use(express.static('public'));
app.use('/lib', express.static('node_modules'));

app.listen(PORT, function(){
	console.log('listen: ' + PORT)
})