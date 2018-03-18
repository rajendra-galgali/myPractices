'use strict';

var appRouter = function(app) {
	
	require('./users/routes.js')(app);
};

module.exports = appRouter;
