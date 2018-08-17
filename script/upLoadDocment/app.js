angular.module('uploadDocumentModule', [])
    .controller('uploadController',['$scope', function($scope){
        console.log("myFile", $scope.myFile)

    }]).
    directive('myFileUpload',function(){
        return {
            restrict: 'E',

        }
})


angular.bootstrap(document.documentElement, ['uploadDocumentModule'], {strictDi:true});