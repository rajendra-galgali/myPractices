angular.module('firstModule', [])
.controller('firstController', ['$scope', function($scope){
    $scope.firstScope = 100;
    console.log("within firstModule, firstController");
}]);

/*
 <div ng-controller="firstController">
 {{firstScope}}
 </div>

 */