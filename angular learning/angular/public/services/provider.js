angular.module('myApp',[])
.config(['simpleProvider',function(simpleProvider){
	console.log("my config");
	simpleProvider.setUrl('./sample.json')
}])
.controller('myController',['simple',function(simple){
	console.log(" my controller",simple);
	simple.getJson()
		.then(function(responseData){
			console.log(responseData);
		},function(error){
			console.log(error);
		})
}])
.provider('simple',[function(){
	var url = '';
	this.setUrl = function(u){
		url = u;
	}
	this.$get = function($http,$q){
		let services = {};
		services.getJson = function(){
			let defer = $q.defer();
			$http.get(url)
			.then(function(responseData){
				defer.resolve(responseData.data)
			},function(error){
				defer.reject(error.statusText)
			})
			return defer.promise;
		}
		return services;
	}
	
}])