 angular.module('firstModule', [])
        .controller('firstController', ['$scope', function ($scope) {
            $scope.data = [{
                "name" : "rajendra",
                "age" : "25",
                "location" : "Bagalkot"
            },{
                "name" : "mahesh",
                "age" : "26",
                "location" : "Bangaluru"
            },{
                "name" : "basha",
                "age" : "24",
                "location" : "gulbarga"
            },{
                "name" : "vinaya",
                "age" : "23",
                "location" : "jamkhandi"
            },{
                "name" : "amit",
                "age" : "23",
                "location" : "deli"
            },{
                "name" : "galgali",
                "age" : "25",
                "location" : "mumbai"
            },{
                "name" : "shrikant",
                "age" : "29",
                "location" : "pune"
            }];
            $scope.startFrom = 0;
            $scope.numberOfRecordsPerPage = 2;
        }])
        .directive('paginationDirective',function(){
            return  {
                templateUrl : 'paginationTable.html',
                scope : {
                    data : '=',
                    start : '@',
                    recodsPerPage : '@'
                },
                controller: ['$scope',function($scope){
                    $scope.position = parseInt($scope.start);
                    $scope.NumberOfDataPerPage = parseInt($scope.recodsPerPage);
                    $scope.numberOfPage = Math.ceil($scope.data.length / $scope.NumberOfDataPerPage);
                    $scope.pages = [];
                    for(var i=0;i<$scope.numberOfPage;i++){
                        $scope.pages.push(i+1);
                    }
                   $scope.getPagination = function(pgNo){
                        $scope.user = angular.copy($scope.data);
                        $scope.pageData = $scope.user.splice(pgNo*$scope.NumberOfDataPerPage,$scope.NumberOfDataPerPage);
                    }
                    $scope.getPagination(0);
                }]
            }
        })

        angular.bootstrap(document.documentElement, ['firstModule'], {
            strictDi: true
        });