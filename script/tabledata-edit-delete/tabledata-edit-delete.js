angular.module('tableDataModule', [])
.controller('tableDataController', ['$scope','$http', function($scope, $http){

    $http.get('/employee-details.json').success(function(data){
        $scope.dataVal = data;
        console.log(" $scope.dataVal",  $scope.dataVal)
    }).error(function(eror){
      alert("NO DATA FOUND");
    })

}]);