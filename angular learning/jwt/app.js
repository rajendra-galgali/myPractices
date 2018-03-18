'use strict';

const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/api', (req,res) => {
	res.send({
		message : "hello rajendra"
	})
})

app.post('/api/post', (req,res) => {

	const user = {
		id : 1,
		userName : "rajendra",
		email : "raj@tt.com"
	}
	jwt.sign('rajendra', 'galgali', (error, token) => {
		console.log(token);
		res.send({
		message : "post api",
		token
	})
	});

})

app.post('/api/login', verifyToken, (req,res) => {
	console.log(req.token);
	jwt.verify(req.token, 'galgali', (err, data) => {
		console.log(data , err);
		if(data == 'rajendra' && !err){
			res.send('success')
		}else{
			res.send('in valid')
		}
	})
})

function verifyToken(req, res, next){

	const auth = req.headers.authorization;
	let authToken = auth.split(' ')[1];

	console.log(typeof auth);
	if(typeof auth !== 'undefined'){
		req.token = authToken;
		next();
	}else{
		console.log("coming");
		res.send(403)
	}
}

app.listen(5000, () => console.log("server running on 5000"))