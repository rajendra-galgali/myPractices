angular.module('firstDirectiveModule', [])
    .controller('firstDirectiveController', ['$scope', function ($scope) {
     $scope.firstData = 100;
    }])
    .directive('firstDirective', function () {
        return {
            restrict: 'E',
            replace: true,
            scope:{
             firstData : '='
            },
            template: '<div>first >>>>>{{firstData}}<input type="text" ng-model="firstData" /></div>',
            controller: ['$scope', function($scope){
                //console.log($scope.a)
                $scope.first = 200;
            }]
        }
    })
    .directive('secondDir', function(){
        return {
            scope:{
                secData : '='
            },
           template: '<div>second >>>>>{{secData}}<input type="text" ng-model="secData" /></div>'
        }
    })

/*
<div ng-controller="firstDirectiveController">
    ctrl b val {{b}}
<div ng-include src="'script/directive/firstdirective/firstDirective.html'"></div>
    </div>
*/
