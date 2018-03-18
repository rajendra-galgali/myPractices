 angular.module('firstModule', [])
 .controller('firstController', ['$scope','getJson','$q',
        function ($scope,getJson,$q) {
    $scope.data = [{name:"rajendra"}];
    $scope.startFrom = 2;
    $scope.numberOfRecordsPerPage = 5;
    //function getDatas(){
        getJson.getData().then(function(responseData){
            console.log("222",responseData);
            $scope.data = responseData;
        },function(err){
            console.log(err);
        })
    //}
    //getDatas();
}])
 .factory('getJson',function($q,$http){
    var service = {};
    service.getData = function(){
        var defer = $q.defer();
        console.log("coming");
        $http.get('./sample.json').then(function(responseData){
            console.log(responseData);
            defer.resolve(responseData.data);
        },function(error){           
            defer.reject(error);
        })
        return defer.promise;
    }
    return service;
})
 .directive('tableDirective',function($interpolate){
    return  {
        templateUrl : 'paginationTable.html',
        transclude : true,
        scope :{
            "data" : "=",
            "start" : "@",
            "recodsPerPage" : "@",
            "pagination" : "@",
            "search" : "@"
        },
        controller : function($scope,$filter,$attrs){
            console.log("333333",$scope.$parent.data,"--",$attrs);
            $scope.$watch('data',function(newValue,oldValue){
                if(newValue){
                    $scope.data = newValue;
                    $scope.getPagination(0);
                }
            })
            $scope.searchBy;
            $scope.isSearch = $scope.search == 'true' ? true : false;
            var count = 0;
            $scope.headings = [];
            
            if($scope.pagination == "true" && $scope.data){
               
                $scope.getPagination = function(pgNo){
                     $scope.recodsPerPage = $scope.recodsPerPage
                $scope.NumberOfDataPerPage = parseInt($scope.recodsPerPage);
                $scope.numberOfPage = Math.ceil($scope.data.length / $scope.NumberOfDataPerPage);
                $scope.position = $scope.start > $scope.numberOfPage ? 0 : $scope.start - 1 ;
                $scope.pages = [];
                for(var i=0;i<$scope.numberOfPage;i++){
                    $scope.pages.push(i+1);
                }
                    if($scope.data && $scope.data.length > 0){
                $scope.headings = Object.keys($scope.data[0])
                angular.forEach($scope.data,function(val,key){
                    angular.forEach(Object.keys(val),function(val1,key1){
                        var v = $scope.headings.includes(val1);
                        if(!v){
                            $scope.headings.push(Object.keys(val)[key1])
                        }
                    })
                })
            }

                    $scope.position = pgNo+1;
                    $scope.user = angular.copy($scope.data);
                    $scope.pagData = $scope.user.splice(pgNo*$scope.NumberOfDataPerPage,$scope.NumberOfDataPerPage);
                }
                $scope.getPagination($scope.position);
            }else{
               $scope.pagData = $scope.data;
           }

           var order = '+';
           var orderByHead = $scope.headings[0];
           var orderNow;
           $scope.orderBy = function(by){
            if(by == orderByHead){
                order = order == '+' ? '-' : '+';
                orderNow = order+orderByHead;
            }else{
                orderByHead = by;
                order = '+';
                orderNow = order+orderByHead;
            }
            $scope.data = $filter('orderBy')($scope.data, orderNow);
            $scope.getPagination(0)
        }
        
    }
}
})

 angular.bootstrap(document.documentElement, ['firstModule'], {
    strictDi: false
});