angular.module('factoryModule', [])
    .controller('factoryController', ['$scope', 'MyFactory', function($scope, MyFactory) {

        console.log(MyFactory)
        MyFactory.sayHello();
        $scope.add = function() {
            //console.log($scope.a);
            MyFactory.calc($scope.a, $scope.b, function(res){
                $scope.sum1 = res;
            });
        }
    }])
    .factory('MyFactory', [function () {
        var myfactoryObj = {};
        myfactoryObj.sayHello = function () {
            console.log("say hello factory");
        };
        myfactoryObj.calc = function (a, b, cb) {
            console.log("calc", a);
            response =  parseInt(a) + parseInt(b);

            return cb(response);
        };
        return myfactoryObj;
    }]);