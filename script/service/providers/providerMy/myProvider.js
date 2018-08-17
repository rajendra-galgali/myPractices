angular.module('myproviderModule', [])
    .controller('myControllerProvider', ['sample', function (sample) {
        // sample.sayHelloOpco();
    }])
    .config([function () {
        console.log('within config')
    }])
    .provider('sample', [function () {
        /*this.opco = function(name){
         opcoName = name;
         }*/

        console.log("with in provider");
        console.log("with in provider", this);
        //opcoName = "benin"

        this.$get = function () {

        }

    }])
    .run([function () {
        console.log("within run");
    }])


