angular.module('dirParentChildAttr', [])
.controller('dirParentChildAttrCtrl', ['paginationService','$scope', function(paginationService, $scope){
    /*paginationService.serviceFunction().then(function(data){
        $scope.tableData = data.data.response.body;
        $scope.totalNumberOfRec = $scope.tableData.length;
        var totaldi = ($scope.totalNumberOfRec/2);
        $scope.listArr = _.range(1,totaldi+1);
        console.log('listArr', $scope.listArr)
        console.log('tableData', $scope.tableData)

    });*/


    $scope.data = {
        "response": {
            "body": [
                {
                    "name": "veena",
                    "id": 1,
                    "age":23,
                    "location": "Bangalore"
                },
                {
                    "name": "monica",
                    "id": 2,
                    "age":23,
                    "location": "Mangalore"
                },
                {
                    "name": "pooja",
                    "id": 3,
                    "age":22,
                    "location": "Mysore"
                },
                {
                    "name": "galgali",
                    "id": 4,
                    "age":25,
                    "location": "Darhwad"
                },
                {
                    "name": "veena1",
                    "id": 5,
                    "age":50,
                    "location": "Bangalore"
                },
                {
                    "name": "monica1",
                    "id": 6,
                    "age":51,
                    "location": "Mangalore"
                },
                {
                    "name": "pooja1",
                    "id": 7,
                    "age":51,
                    "location": "Mysore"
                },
                {
                    "name": "galgali1",
                    "id": 8,
                    "age":51,
                    "location": "Darhwad"
                }
            ]
        }
    }

    $scope.tableData =  $scope.data.response.body;
   /* $scope.totalNumberOfRec = $scope.tableData.length;
    console.log("$scope.limit>>>>>", $scope.limit)
    var totaldi = ($scope.totalNumberOfRec/$scope.limit);
    $scope.listArr = _.range(1,totaldi+1);*/

}])
.directive('dirParentChildAttr', function(){
    return {
        scope : {
            tableData :'=',
            //listArr : '@',
            limit:'@',
            paginate:'@'
        },
        templateUrl:'script/directive/dir-parent-child-attr/parent-child-attr.html',
        controller:['$scope', function($scope){
            console.log("listArr", $scope.listArr)
            console.log("$scope.tableData", $scope.tableData)

            $scope.tableHeader = Object.keys($scope.tableData[0])
            console.log("$scope.tableHeader", $scope.tableHeadertableHeader)

           $scope.totalNumberOfRec = $scope.tableData.length;
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
                /*console.log("tfootDt", $scope.tfootData)*/
                //0,2 ,,,2,4,,,,4,6,,,,6,8   $index - 0,1,2,3
                $scope.tableData1 = tableData.slice((a*$scope.limit),((a*$scope.limit)+$scope.limit))
            };

            $scope.record(0);
        }]
    }
})
.service('paginationService', ['$q', '$http', function ($q, $http) {
    var defer = $q.defer();
    this.serviceFunction = function () {
        $http.get('data/employee-details.json').then(function (res) {

            return defer.resolve(res);

        }, function (err) {
            return defer.reject(err);
        });
        return defer.promise;
    }
}]);