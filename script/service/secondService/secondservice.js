angular.module('secondServiceModule', [])
    .controller('secondServiceController1', ['$scope','SecondService', function ($scope, SecondService) {
       $scope.d = SecondService;
        $scope.sum = function(){
            $scope.add = SecondService.servicefunction($scope.c, $scope.b);
        }

    }])
    .controller('secondServiceController2', ['$scope', 'SecondService', function ($scope, SecondService) {
       // $scope.b = SecondService;
        $scope.sum = function(){
            $scope.add = SecondService.servicefunction($scope.c, $scope.b);
        }
    }])
    .service('SecondService', function(){
            this.servicefunction = function (a, b) {
              console.log("a",a)
               return c = parseInt(a)+parseInt(b);
        }
    });
