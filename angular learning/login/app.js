'use strict';

let express = require('express');
let app = express();
var cluster = require('cluster');
var server = require('http').createServer(app);
let port = process.env.PORT || 1992;
console.log(process.env.PORT);

module.exports = function(app) {
};