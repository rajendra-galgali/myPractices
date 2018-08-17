angular.module('directiveParentChild', [])
.directive('parentDir', function(){
    return {
        templateUrl:'script/directive/directive-parent-child/parentDirective.html',
        controller: ['$scope','paginationService',function($scope, paginationService){
            $scope.val = 1000;
            paginationService.serviceFunction().then(function(data){
                $scope.tableData = data.data.response.body;
                $scope.totalNumberOfRec = $scope.tableData.length;
                var totaldi = ($scope.totalNumberOfRec/2);
                $scope.listArr = _.range(1,totaldi+1);
                $scope.record(0);
            });

            $scope.record = function(a){
                var tableData = $scope.tableData;
                /*console.log("tfootDt", $scope.tfootData)*/
                //0,2 ,,,2,4,,,,4,6,,,,6,8   $index - 0,1,2,3
                $scope.tableData1 = tableData.slice(a*2,a*2+2)
            };

        }]
    }
})
.directive('childDir', function(){
    return{
        scope: {
            tableData : '='
        },
        templateUrl:'script/directive/directive-parent-child/childDirective.html'
    }
})
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
}]);