angular.module('serviceModule', [])
.controller('serviceController1',['$scope', function($scope){
$scope.servicefunction = function(a){
    console.log("controller 1", a);
}
}])
.controller('serviceController2',['$scope', function($scope){
     $scope.servicefunction = function(a){
         console.log("controller 2", a);
     }
}]);

/*
<div  ng-controller="serviceController1" class="container" style="margin-top: 100px">
    <div>
    <button ng-click="servicefunction('veena')">click</button>
    </div>
    <div ng-controller="serviceController2">
    <button ng-click="servicefunction('ray')">click</button>
    </div>
    </div>*/
/*
<div  class="container" style="margin-top: 100px">
    <div ng-controller="serviceController1" >
    <button ng-click="servicefunction('veena')">click</button>
    </div>
    <div ng-controller="serviceController2">
    <button ng-click="servicefunction('ray')">click</button>
    </div>
    </div>
*/
