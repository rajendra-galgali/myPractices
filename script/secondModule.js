angular.module('secondModule', [])
    .controller('secondController', ['$scope', function($scope){
        $scope.secondScope = 200;
        console.log("within secondModule, secondController");
    }]);

/* <div ng-controller="secondController">
 {{secondScope}}
 </div>*/