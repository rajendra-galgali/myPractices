'use static';
var express = require('express');
var cluster = require('cluster');
console.log(cluster);
var app = express();

app.use(express.static('FE'));
app.use('/lib',express.static('node_modules'));
if(cluster.isMaster){
	var cpuCount = require('os').cpus().length;
	for(var i = 0 ;i < cpuCount ; i++){
		cluster.fork();
	}

	cluster.on('exit',function(worker){
		console.log('worker',worker);
		//cluster.fork();
	})
}else{
	app.listen(1992, ()=> console.log("server running on localhost:1992"))
}


/*var mongo = require('./BE/DB/connection.js');
global.db = mongo.checkDBConnectionObject();
require('./BE/config/accessConfig.js')(app);
require('./BE/api/routes.js')(app);
*/
