
define(['angular', 'loadash','angular-ui-router'],function(angular){
    'use strict';

    angular.module("routesModule",['ui.router'])
        .controller("myRequireCtrl",[function(){
            console.log("within requrie ctrl")
        }])
        .run([function(){
            console.log("within run")
        }])
        .config(['$stateProvider','$urlRouterProvider','$httpProvider',function($stateProvider, $urlRouterProvider, $httpProvider){
            console.log("within config")
            console.log("$httpProvider", $httpProvider)

            $stateProvider.state('home', {
                url:'/home',
                views:{
                    'uv1@':{
                       template:'<h1>home</h1>',
                        controller:[function(){
                            console.log("within controller")
                        }]
                    }

                }

            });
           // $urlRouterProvider.otherwise('home');
         }])
        .provider('sampleService', [function(){
            var opco = 'congo';
            console.log("within provider", opco)
            this.$get = ['$http','$q',function($http, $q){
                var sampleObject = {};
                var defer = $q.defer();
                sampleObject.opcoDataFunction = function(){
                    $http.get('data/env/'+opco+'.config.json').then(function(response){
                       defer.resolve(response)
                    }, function(err){
                        defer.reject(err)
                    })
                   return defer.promise;
                }

                return sampleObject;
            }]
        }])




});