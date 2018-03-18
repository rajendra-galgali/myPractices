function myController(scope,$injector){
	
	getJsonService = $injector.get('getJson');
	
	getJsonService.getJsonData('../paginationInTwo/sample.json')
		.then(function(responseData){
			scope.userData = responseData;
		},function(error){
			console.log(error);
		})
}
function getJson(injector){
	let services = {};
	let http = injector.get('$http');
	let q = injector.get('$q');
	services.getJsonData = function(url){
		let defer = q.defer();
		http.get(url)
			.then(function(responseData){
				defer.resolve(responseData.data)
			},function(responseError){
				defer.reject(responseError.statusText)
			})
		return defer.promise;
	}
	return services;
}
function tableDirective(){
	scope : {
		userData : '='
	}
	return {
		templateUrl : "table.html",
		link : {
				pre : function(scope, ielement, iattr){
					console.log("Pre",scope.color);
					scope.getColor().then(function(data){
						console.log(" yee ",data);
						scope.color = data.color;
						ielement.css('color',data.color);
					})
					
				},
				post : function(scope, ielement, iattr){
					console.log("post",scope.color);
					//ielement.css('color','red');
				}
			},
		controller : ['getJson','$scope',function(getJson,scope){
			scope.getColor = function(colorCode){
				return new Promise(function(resolve,reject){
					getJson.getJsonData('./red.json')
					.then(function(responseData){
						scope.color = responseData.color;
						resolve(responseData)
					},function(err){
						console.log(err);
					})	
				})
			}
		}]
	}
}
getJson.$inject = ['$injector'];
myController.$inject = ['$scope','$injector'];


let app = angular.module('myApp',[]);
app.controller('myController',myController)
app.factory('getJson',getJson)
app.directive('tableDirective',tableDirective)