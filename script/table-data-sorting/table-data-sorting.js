angular.module('tableDataSortModule',[])
.controller('tableDataSortController',['tableDataSortService', '$scope', function(tableDataSortService, $scope){

    $scope.abc = function(){
        tableDataSortService.serviceFunction().then(function(data){
            $scope.tableData = data.data.response.body;
        })
    };
    $scope.abc();

    $scope.reverse = true;
   // $scope.propertyName = 'name';
    $scope.sort = function (propertyName) {
        console.log(propertyName)


       $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
        $scope.propertyName = propertyName;




        // $scope.xyz = (variable ===  $scope.variable1)? '-'+variable : ;




      /*  if((variable ===  $scope.variable1)){
            $scope.xyz = '-'+variable;

            $scope.reverse1 = false;
        }
        else{

        }
*/
      /*  if(variable ===  $scope.variable1){
            console.log("variable ===  $scope.variable1", variable ===  $scope.variable1)
            if($scope.reverse1){
               console.log("$scope.reverse1", $scope.reverse1)
                $scope.variable1 = variable;
                $scope.xyz = '-'+variable;
                console.log($scope.xyz)
                $scope.reverse1 = false;
            }
            else{

                $scope.xyz = variable;
                console.log($scope.xyz)
                $scope.reverse1 = true;
            }
        }


        if(variable ===  $scope.variable2){
            console.log("variable ===  $scope.variable2", variable ===  $scope.variable2)

            if($scope.reverse2){
                console.log("$scope.reverse2", $scope.reverse2)
                $scope.variable2 = variable;
                $scope.xyz = '-'+variable;
                $scope.reverse2 = false;

            }
            else{

                    $scope.xyz = variable;
                console.log($scope.xyz);
                $scope.reverse2 = true;
            }

        }
        if(variable ===  $scope.variable3){
            if($scope.reverse3){
                console.log("$scope.reverse3", $scope.reverse3)

                $scope.variable3 = variable;
                $scope.xyz = '-'+variable;
                $scope.reverse3 = false;
            }
            else{
                $scope.xyz = variable;
                console.log($scope.xyz)
                $scope.reverse3 = true;
            }
        }*/

    }

}])
.service('tableDataSortService', ['$http','$q',function($http, $q){
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