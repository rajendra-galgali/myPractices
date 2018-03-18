var express = require('express');
var bodyParser = require('body-parser');
const appRouter = express.Router();

(function () {
    module.exports = function (app) {
        app.use('/app', appRouter);

        appRouter.post('/users/addUser', function(req,res){
        	res.send({
        		"name" : "rajendra"})
        });

        
    }
})()