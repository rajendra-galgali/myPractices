angular.module('paginationModule', [])
.controller('paginationController', ['paginationService','$scope', function(paginationService, $scope){
    paginationService.serviceFunction().then(function(data){
        $scope.currentPage = 0;
        $scope.arry = $scope.tableData;
        $scope.tableData = data.data.response.body;
        $scope.totalNumberOfRec = $scope.tableData.length;
        var totaldi = ($scope.totalNumberOfRec/2);

        var list=[];

        /*var range = function(start_num, end_num)
        {
            list.push(start_num+1);
            var start_num = start_num+1;
            if(start_num < end_num){
                range(start_num, end_num);
            }
            return list;
        };
        $scope.listArr = (range(0,totaldi.length));*/

       $scope.name = 'name';
       $scope.reverse = true;
        $scope.sort = function(name){
           $scope.reverse = ($scope.name === name)?!$scope.reverse:false;
            $scope.name = name;
        };

        $scope.listArr = _.range(totaldi);

        $scope.record = function(a){
            var tableData = data.data.response.body;
            //0,2 ,,,2,4,,,,4,6,,,,6,8   $index - 0,1,2,3
            $scope.tableData = tableData.slice(a*2,a*2+2)
        };
        $scope.record(0);


    });
}])
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