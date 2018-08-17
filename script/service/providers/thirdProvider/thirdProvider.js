/**
 * Created by onkarve on 1/7/2018.
 */
angular.module('mythirdproviderModule', [])
    .controller('mythirdControllerProvider', ['sample','$scope','$log', function (sample, $scope, $log) {
        console.log("ctrl");

       // $scope.empList = sample;
        //console.log("vvvvv",  $scope.empList.empDetails);
        $scope.today = new Date();
       sample.sayHelloOpco();


        $scope.propertyName = 'location';
        $scope.reverse = true;

        $scope.sortBy = function(propertyName) {
            $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
            $scope.propertyName = propertyName;
        };


       $scope.empList = function(){
           sample.show().then(function(resp){
               console.log("resp", resp)
               $scope.empList =  resp;
           });
       }
       $scope.empList();
       console.log("adfasvgj", sample.show()) ;

        $scope.deleteRowdata = function(index){
            console.log("ada", index);
            $scope.empList.splice(index, 1);
        }

        $scope.enable = false;
        $scope.editData = function() {
            $scope.enable = true;
        }

    }])
    .config(['sampleProvider', function(sampleProvider) {
        console.log('within config $rootScope');
        sampleProvider.opco('cameroon');
        console.log("sampleProvider", sampleProvider.$get);

    }])
    .provider('sample',[function() {
        this.opco = function(name){
            opcoName = name;
        };

        console.log("with in provider", this);
        var opcoName = "benin";

        this.$get = ['$http','$log','$rootScope','$q', function ($http, $log, $rootScope, $q) {

            providerObj = {};
            var defer = $q.defer();
           /* providerObj.show  = function(){
                console.log("show")
            }*/

            providerObj.show  = function() {
                $http.get('data/employee-details.json').then(function (data) {

                    defer.resolve(data.data.response.body);
                }, function (error) {
                    defer.reject(error);
                    $log.info("info :", error.statusText);
                    $log.error("error :", error.statusText);
                    $log.warn("warn :", error.statusText);
                    $log.log("log :", error.statusText);
                    alert(error.statusText);
                });

                return defer.promise;
            }


            providerObj.sayHelloOpco = function(){
                console.log("within provider sayhello function  and Opco is " +opcoName )
            };

            return providerObj;
        }]

    }])
    .run([function () {
        console.log("within run");
    }])


