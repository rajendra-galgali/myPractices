angular.module('rootScopeModule', [])
.controller('scopeController', ['$scope','$rootScope', function($scope, $rootScope){
    //$scope.ctrllevelscopeVal = 300;
    //$rootScope.ctrllevelscopeVal = 300;
    console.log("within scopeController");
    console.log("within scopeController & $scope.ctrllevelscopeVal", $scope.ctrllevelscopeVal);

}])
.run(['$rootScope',function($rootScope){
    $rootScope.ctrllevelscopeVal = 500;
    console.log("within run");
    console.log("within run & $rootScope.ctrllevelscopeVal", $rootScope.ctrllevelscopeVal)
}])
.config([function(){
    console.log("within config")
}]);

/* in run we cant inject $scope, and bad pratice to add rootscope in controller*/


/*<div ng-controller="scopeController">
 {{ctrllevelscopeVal}}
 </div>
 {{ctrllevelscopeVal}}*/