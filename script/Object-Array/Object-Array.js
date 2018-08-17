angular.module('objectArrayModule', [])
.controller('objectController', ['$scope', function ($scope){

    $scope.obj = {
        a:"one",
        b:"two",
        c:"three"
    };


    console.log("value of obj 1 :" ,$scope.obj.a);
    console.log("OBJECT KEYS" ,Object.keys($scope.obj));
    console.log("OBJECT VALUES :" ,Object.values($scope.obj));

    /*push the object to end, mid , end */
    $scope.dataObj = $scope.obj;
    console.log("$scope.dataObj>>>>>>>>>>>>>>>>>>>>>>...", $scope.dataObj)
    $scope.obj.d = "four";
    console.log("$Scope.obj data" ,$scope.obj);
    console.log("$Scope.obj dataObj" ,$scope.dataObj);

    /*remove the obj @ position 2*/

    delete $scope.obj.b;
    console.log('after deleting', $scope.obj);
    console.log('after deleting dataObj', $scope.dataObj);

    /*update the obj data @ 2nd position*/
    $scope.obj.c = "update";
    console.log('after update', $scope.obj);
    console.log('after update dataObj', $scope.dataObj);


    /****************************************************ARRAY*****************************/

    $scope.arr = [{
        name:"veena",
        id:2467
    }, {
            name:"monica",
            id:2470
        },
        {
            name:"pooja",
            id:2469
        }]


    console.log("", $scope.arr)


}
]);