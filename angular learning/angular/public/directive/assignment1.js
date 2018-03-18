function paginationController(s,pf,ps){
	console.log("pagination controller");
	let path = '../pagination/data.json';
	pf.getData(path,function(responseData){
		console.log("from factory",responseData);
	});
	ps.getData(path,function(responseData){
		console.log("from service "+responseData);
	})
}

function paginationFactory(h,l){
	console.log("pagination Factory");
	let services = {};
	services.getData = function(path, cb){
		h.get(path)
			.then(function(responseData){
				console.log(responseData);
			},function(err){
				l.error(err.status + "  " + err.statusText)
			})
	}
	return services;
}

function paginationService(h, l){
	console.log("pagination service");
	this.getData = function(path,cb){
		h.get(path)
			.then(function(reponseData){
				cb(reponseData);
			},function(err){
				l.error(l.status + "  " + l.statusText);
			})
	}
}

paginationController.$inject = ['$scope','paginationFactory', 'paginationService'];
paginationFactory.$inject = ['$http', '$log'];
paginationService.$inject = ['$http', '$log'];

let app = angular.module('paginarionApp',[]);
app.controller('paginationController',paginationController);
app.factory('paginationFactory',paginationFactory);
app.service('paginationService',paginationService)
