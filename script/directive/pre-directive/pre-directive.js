angular.module('preDirective', [])
.controller('preController', ['$scope', 'paginationService','$timeout',function($scope, paginationService, $timeout){

   /* $timeout(function() {
       console.log("MAIN CONTROLLER")
    }, 1000);
*/

    paginationService.serviceFunction().then(function(data){
        console.log("WITHIN IN MAIN>>>>>")
        $scope.tableData = data.data.response.body;
        console.log(" $scope.tableData ",  $scope.tableData )

    });
  /*  $timeout(function() {
    paginationService.serviceFunction().then(function(data){
        console.log("WITHIN IN MAIN>>>>>")
        $scope.tableData = data.data.response.body;
        console.log(" $scope.tableData ",  $scope.tableData )

    });
    }, 20000);*/


}])
.directive('dirParentChildAttr2', function(){
        return {
            scope : {
                tableData :'=tableData1',
                limit:'@',
                paginate:'@'
            },
            templateUrl:'script/directive/pre-directive/pre-compile.html',

            compile:function(tele,tatr){
               // console.log("tatr>>>", tatr)
               return{
                   pre: function($scope,iele, iatr){
      $scope.abc = iatr;


                       console.log("BBBBBBBBBBBBBBB", iatr.$observe('tableData'))
                       console.log("BBBBBBBBBBBBBBB", iatr)

                     /*  console.log("nnnnnnnnnnnnnnnnnnnn>>>>>>>>", $scope.$watch('abc', function(v){
                           console.log("BBBBBBBBBBBBBBB", v)
                       }))*/
                    /*   console.log("xxxxxxxxxxxxxxxxxxx",$scope.$observe('tableData', function(bbbbbb){
                           console.log("bbbbbb", bbbbbb)
                       }))*/
                      // console.log("vvvvvvvvvvvvvvvvvvvvvvvvvv", dd)

                     //  console.log("iatr.tableData", )
                   /*    console.log("$scope.tableHeader", $scope.tableHeadertableHeader)
                   if( $scope.tableData){
                           console.log("if>>>>>>>>>>> $scope.tableData",  $scope.tableData)
                   }*/
                      // $scope.totalNumberOfRec = $scope.tableData.length;
                       console.log("$scope.limit>>>>>", $scope.limit)
                       if($scope.totalNumberOfRec > $scope.limit && $scope.paginate){
                           var totaldi = ($scope.totalNumberOfRec/$scope.limit);
                           $scope.listArr = _.range(1,totaldi+1);
                       }


                       $scope.name = 'name';
                       $scope.reverse = true;
                       $scope.sort = function(name){
                           console.log("sort ", name)
                           $scope.reverse = ($scope.name === name)?!$scope.reverse:false;
                           $scope.name = name;
                       };

                       $scope.record = function(a){
                           var tableData = $scope.tableData;
                           /!*console.log("tfootDt", $scope.tfootData)*!/
                           //0,2 ,,,2,4,,,,4,6,,,,6,8   $index - 0,1,2,3
                           $scope.tableData1 = tableData.slice((a*$scope.limit),((a*$scope.limit)+$scope.limit))
                           $scope.tableData1.value =   $scope.tableHeader;
                           console.log("$scope.tableData1value>>>", $scope.tableData1.value)
                       };

                      // $scope.record(0);
                   }
                }

            }
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