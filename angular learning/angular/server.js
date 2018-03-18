'use strict'
let express = require('express');
let morgan = require('morgan');
let app = express();

const port = 1992;
app.use(express.static('public'));
app.use('/lib',express.static('node_modules'));

app.listen(port,function(){
	console.log("Server running on port :"+port);
});