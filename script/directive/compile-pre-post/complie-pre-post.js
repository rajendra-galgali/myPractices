angular.module('compileModule', [])
.controller('complieCtrl', ['$scope',function($scope){
    console.log("main Ctrl")
    $scope.val = 100;
    console.log($scope.val)
}])
    .directive('compileDir', function(){
        return{
            scope:{
                valDir : '@'
            },
            template:'<div>{{valDir}}</div>',
            compile: function(tele, tattr){
                console.log("compile")
                console.log("compile tattribute ----- ", tattr.text)

                return {
                    pre: function(scope, iele, iattr){
                        console.log("pre")
                        console.log("pre attribute -----", iattr.text)
                        console.log("pre scope -----", scope.valDir)
                        scope.valDir = 200;
                        console.log("pre scope -----", scope.valDir)
                    },
                    post : function(scope, iele, iattr){
                        console.log("post")
                        console.log("post attribute", iattr.text)
                    }
                }
            },
            controller: function(){
                console.log("directive ctrl")
            }

        }
    })


