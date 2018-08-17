
angular.module('directiveTest', [])
.controller('directiveTestCtrl',['$scope', function($scope){
    $scope.data = {
        name:"veena",
        id:2467
    }

    $scope.hello=function (){
        console.log("helllllllllllllllllllllo");
    }

    console.log("within the  directiveTestCtrl")
}])

.directive('parentDirective', function(){
    return {
        restrict : 'A',
        scope:{
            //response :'@',
          response :'=',
            hello:'='
        },
        controller:['$scope',function($scope){
           // console.log("within parentDir --- @ " , $scope.response)
           // console.log("within parentDir response.name --- @ " , $scope.response.name)
            console.log("within parentDir --- = " , $scope.response.name)

            //$scope.hello;
            console.log("$scope.hello;", $scope.hello())
            $scope.hello= function(){
                console.log("hhhhhhhhhhhhhhhhhhhheeeeeeeeeeeeeeeeeeeeeeeee")
            }
            console.log("within parentDir --- &" , $scope.hello())
        }]
       // templateUrl:'script/directive/parent-Test.html'
    }

})
  /*  .directive('childDirective', function(){

        return {
            restrict : 'A',
            templateUrl:'script/directive/childFooter.html',
            controller: ['$scope','paginationService',function($scope, paginationService){
                $scope.val = 1000;

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

                $scope.totalNumberOfRec = $scope.tableData.length;
                var totaldi = ($scope.totalNumberOfRec/2);
                $scope.listArr = _.range(1,totaldi+1);


                $scope.record = function(a){
                    var tableData = $scope.tableData;
                    /!*console.log("tfootDt", $scope.tfootData)*!/
                    //0,2 ,,,2,4,,,,4,6,,,,6,8   $index - 0,1,2,3
                    $scope.tableData1 = tableData.slice(a*2,a*2+2)
                };

                $scope.record(0);

            }]
        }

    })
*/