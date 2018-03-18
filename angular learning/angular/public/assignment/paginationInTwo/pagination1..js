 angular.module('firstModule', [])
 .controller('firstController', ['$scope', function ($scope) {
    $scope.data = [{
        "name" : "rajendra",
        "age" : "25",
        "location" : "Bagalkot"
    },{
        "name" : "mahesh",
        "age" : "26",
        "location" : "Bangaluru",
        "userName" : "rajendra"
    },{
        "name" : "basha",
        "age" : "24",
        "location" : "gulbarga",
        "gender" : "male"
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
        "location" : "mumbai",
        "email" : "rajendra.com"
    },{
        "name" : "shrikant",
        "age" : "29",
        "location" : "pune"
    }];
    $scope.startFrom = 2;
    $scope.numberOfRecordsPerPage = 3;
}])
 .directive('tableDirective',function(){
    return  {
        templateUrl : 'paginationTable.html',
        /*link : {
            post : function($scope,iele,iatt){
                var count = 0;
                $scope.headings = [];
                if($scope.data.length > 0){
                    $scope.headings = Object.keys($scope.data[0])
                    angular.forEach($scope.data,function(val,key){
                        angular.forEach(Object.keys(val),function(val1,key1){
                            var v = $scope.headings.includes(val1);
                            if(!v){
                                console.log(Object.keys(val)[key1])
                                $scope.headings.push(Object.keys(val)[key1])
                            }
                        })
                    })
                }

                if(iatt.pagination == "true"){
                    $scope.recodsPerPage = iatt.recodsPerPage
                    $scope.NumberOfDataPerPage = parseInt($scope.recodsPerPage);
                    $scope.numberOfPage = Math.ceil($scope.data.length / $scope.NumberOfDataPerPage);
                    $scope.position = iatt.start > $scope.numberOfPage ? 0 : iatt.start - 1 ;
                    $scope.pages = [];
                    for(var i=0;i<$scope.numberOfPage;i++){
                        $scope.pages.push(i+1);
                    }
                    $scope.getPagination = function(pgNo){
                        $scope.position = pgNo+1;
                        $scope.user = angular.copy($scope.data);
                        $scope.pagData = $scope.user.splice(pgNo*$scope.NumberOfDataPerPage,$scope.NumberOfDataPerPage);
                    }
                    $scope.getPagination($scope.position);
                }else{
                   $scope.pagData = $scope.data;
               }
           }
       },*/
       scope :{
        "data" : "=",
        "start" : "@",
        "recodsPerPage" : "@",
        "pagination" : "@"
       },
       controller : function($scope,$filter){
            var count = 0;
                $scope.headings = [];
                if($scope.data.length > 0){
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

                if($scope.pagination == "true"){
                    $scope.recodsPerPage = $scope.recodsPerPage
                    $scope.NumberOfDataPerPage = parseInt($scope.recodsPerPage);
                    $scope.numberOfPage = Math.ceil($scope.data.length / $scope.NumberOfDataPerPage);
                    $scope.position = $scope.start > $scope.numberOfPage ? 0 : $scope.start - 1 ;
                    $scope.pages = [];
                    for(var i=0;i<$scope.numberOfPage;i++){
                        $scope.pages.push(i+1);
                    }
                    $scope.getPagination = function(pgNo){
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