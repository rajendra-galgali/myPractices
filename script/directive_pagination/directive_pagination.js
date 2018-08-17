angular.module('direPagintionModule', [])
.controller('dirPaginationCtrl', ['$scope',function($scope){

  /*  $scope.records = "";
    console.log("records", $scope.records)

*/
}])
.directive('paginationDir', function(){
    return {
        scope :{
            tableData : '='
        },
        templateUrl: 'script/directive_pagination/tableDir.html',
      //  controller: 'tableDir'
    }
})
/*.controller('tableDir', ['$scope', function($scope){
console.log("tableData>>>>>>>>>>>>>>>>>", $scope.tableData)
}])*/
    .service('paginationService', ['$q','$http', function($q, $http){
    var defer = $q.defer();
    this.serviceFunction = function() {
        $http.get('data/employee-details.json').then(function(res){

            return defer.resolve(res);

        }, function(err){
            return defer.reject(err);
        });
        return   defer.promise;
    }
}])
.directive('tfootDir', function(){
    return {
        scope:{
            tfootData :'='
        },
        controller: ['$scope', 'paginationService',function($scope, paginationService){
            paginationService.serviceFunction().then(function(data){
                $scope.tableData = data.data.response.body;
                $scope.totalNumberOfRec = $scope.tableData.length;
                var totaldi = ($scope.totalNumberOfRec/2);
                $scope.listArr = _.range(1,totaldi+1);
                $scope.record(0);
            })

            $scope.record = function(a){
                var tableData = $scope.tableData;
                /*console.log("tfootDt", $scope.tfootData)*/
                //0,2 ,,,2,4,,,,4,6,,,,6,8   $index - 0,1,2,3
                $scope.tfootData = tableData.slice(a*2,a*2+2)
            };

        }],
      templateUrl :  'script/directive_pagination/footPag.html'
    }
})