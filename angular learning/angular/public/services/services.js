
function myController (myService,scope,myFactory,sample){
	console.log("my controller");
	/*myService.getAddtion(3,5).then(function(responseData){
		scope.data = responseData;
	})*/
	/*myFactory.getData()
		.then(function(responseData){
			scope.data = responseData;
		},function(err){
			console.log(err);
		})*/
		sample.getData()
		.then(function(responseData){
			scope.data = responseData;
		},function(err){
			console.log(err);
		})
}

function myService(http,q){
	this.getAddtion = function(a,b){
		var defer = q.defer()
		http.get('./sample.json')
			.then(function(responseData){
				console.log("responseData",responseData);
				defer.resolve(responseData.data)
			},function(err){
				 defer.reject(err.statusText);
			})
		return defer.promise;
	}
}
function myFactory(http,q){
	let services = {};
	let defer = q.defer();
	services.getData = function(){
		http.get('./sample.json')
			.then(function(responseData){
				defer.resolve(responseData.data);
			},function(error){
				defer.reject(error.statusText)
			})
			return defer.promise;
	}
	return services;
}
function myPro(http,q){
	this.setConfig = function(url){
		let jsonUrl = url;
	}
	this.$get = function(){
		let service = {};
		let defer = q.defer();
		service.getData = function(){
			http.get(url)
				.then(function(responseData){
					defer.resolve(responseData.data);
				},function(error){
					defer.reject(error.statusText)
				})
				return defer.promise;
		}
		return service;
	}
}

function myConfig(sampleProvider){
	console.log(myProProvider);
	let url = './sample.json';
	//myPro.setConfig(url)
}
myController.$inject = ['myService','$scope','myFactory','sample'];
myService.$inject = ['$http','$q'];
myFactory.$inject = ['$http','$q'];
myPro.$inject = ['$http','$q'];
myConfig.$inject = ['sampleProvider'];

let app = angular.module('myApp',[]);
app.controller('myController',myController);
app.service('myService',myService);
app.factory('myFactory',myFactory);
app.provider('sample',myPro);
app.config(myConfig)