angular.module('route_params', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        console.log("routeParamsConfig")
        console.log($stateProvider);
        var accesstoken = 'veena'
        $stateProvider
            .state('home', {
            url: '/home',
                views: {
                    'home': {

                        templateUrl: 'script/ui_routes/routes_parames/home.html',
                        controller: ['hello', '$stateParams', 'a','$scope', function (hello, $stateParams, a, $scope) {
                            console.log("hellocontrll", hello)
                            console.log("aaaaaaaaaaa")
                            $scope.a = hello;
                            //console.log("$stateParams", $stateParams)

                        }]
                    }
                },
                resolve:{
                hello: ['configService', function(configService){
                    console.log("hello resolve")
                   return configService.parent();
                }],
                a:['configService', function(configService){
                    return configService.abc();
                }]}

        })
            .state('home.help', {
                url: '/help',
                views: {
                    'help@home': {
                        templateUrl: 'script/ui_routes/routes_parames/help.html',
                        controller: ['help','$scope','a', function (help, $scope, a) {
                           // console.log("help", help)
                            console.log("bbbbbbbb", a)
                            $scope.b = help;
                        }]
                    }
                },
                resolve:{
                    help: ['configService', function(configService){
                        console.log("help resolve")
                        return configService.child();
                    }]}

            }).
        state('help', {
            url: '/help',
            views: {
                'help': {
                    template: '<h1>help</h1>',
                    controller: ['help', function (help) {
                        console.log("help", help)
                    }]
                }
            },
            resolve:{
                help: ['configService', function(configService){
                    console.log("help resolve")
                    return configService.child();
                }]}

        })
    }]).
    controller('routeParamsController', [function(){
console.log("routeParamsController")
}])
 .service('configService', ['$http', '$q', function ($http, $q) {

     this.abc = function(){
         var d = "veena";
         return d;
     }

    // D:\ANGULAR-LEARING\angular\app\script\ui_routes\routes_parames\congo.config.json
     var defer = $q.defer();
        this.configServiceFunction = function () {

           // var url = 'congo.config.json';
            $http.get('script/ui_routes/routes_parames/congo.config.json').then(function (res) {
                defer.resolve(res);
            }, function (err) {
                defer.reject(err)
            })
            return defer.promise;
        }

        this.parent = function(){
            var parent = 1000;
           // console.log(parent)
            return parent;
        }
     this.child = function(){
         var child = 2000;
         // console.log(parent)
         return child;
     }
    }]);


