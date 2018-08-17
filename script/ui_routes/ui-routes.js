angular.module('routeModule', ['ui.router'])
    .controller('routeController', routeController)
    .config(['$stateProvider','$urlRouterProvider', 'oneProvider', function($stateProvider, $urlRouterProvider, oneProvider){
        oneProvider.opco('benin');
        $stateProvider
            .state('book', {
                url:'/book',
                views:{
                    "":{
                        templateUrl:'script/ui_routes/views/home.html',
                        controller: 'homeCtrl'
                    },
                    /*"uv1@":{
                        templateUrl:'script/ui_routes/views/admin.html'
                    },
                    "uv2@":{
                        templateUrl:'script/ui_routes/views/help.html'
                    },
                    "uv3@":{
                        templateUrl:'script/ui_routes/views/admin.html'
                    },
                    "uv5@":{
                        templateUrl:'script/ui_routes/views/admin.html'
                    }*/
                }
            })
            .state('admin', {
                url:'/admin',
                views:{
                    "uv4@":{
                        templateUrl:'script/ui_routes/views/admin.html',
                        controller: ['$scope', function($scope){
                           $scope.parent = 100;
                            //console.log("$rootScope",  $scope.parent)
                        }]
                    },
                   /* "uv3":{
                        templateUrl:'script/ui_routes/views/help.html'
                    },
                    "uv5":{
                        templateUrl:'script/ui_routes/views/home.html'
                    }*/
                },
                label: 'Login',
                onEnter : ['$rootScope', function($rootScope){
                    console.log("$rootScope", $rootScope)
                }]
            })
            .state('admin.help', {
                url:'/help',
                views:{
                    "uv6@admin":{
                        templateUrl:'script/ui_routes/views/help.html',
                        controller:['$scope', function($scope){
                          // $scope.parent = 200;
                            console.log("$scope.parent", $scope.parent)
                        }]
                    }
                }
            })
             .state('admin.sibbling', {
            url:'/sibbling',
            views:{
                "uv8@admin":{
                    templateUrl:'script/ui_routes/views/home.html',
                    controller:['$scope', function($scope){
                      // $scope.parent = 500;
                        console.log("$scope.parent", $scope.parent)
                    }]
                }
            }
        })
            .state('admin.help.child', {
                url:'/child',
                views:{
                    "uv7@admin.help":{
                        templateUrl:'script/ui_routes/views/1.html',
                        controller:['$scope', function($scope){
                         //$scope.parent = 300;
                            console.log("$scope.parent", $scope.parent)
                        }]
                    }
                }
            });
        $urlRouterProvider.otherwise('book');
    }])

    .provider('one', [function () {
        var opcoName;
        this.opco = function (name) {
            return opcoName = name;
        }
        this.$get = function () {
            var service = {};
            service.getOpcoName = function () {
                console.log(opcoName);
            }
            return service;
        }
    }])

    .controller('homeCtrl', ['one', function(one){
        console.log('CTRLL', one);

        one.getOpcoName();
    }])


/*

<div ui-view></div>
views:{
    "":{
        templateUrl:'script/ui_routes/views/home.html'
    },
    "@":{
        templateUrl:'script/ui_routes/views/admin.html'
    }
}

/!*For this Senerio only with view_name @ is displayed *!/
if two view_name is having @ latest one ill be dispalyed

*/



routeController.$inject = ['$scope'];
function routeController($scope) {
    console.log("routeController")
}
/*


<div ng-controller="routeController">
    <div ng-include src="'script/ui_routes/ui-routes.html'"></div>
    </div>*/
