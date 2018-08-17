/**
 * Created by onkarve on 1/7/2018.
 */
angular.module('mySecondproviderModule', [])
    .controller('mySecondControllerProvider', ['sample', function (sample) {
        console.log("ctrl")
        console.log("vvvvv", sample)
        sample.sayHelloOpco();

    }])
    .config(['sampleProvider',function (sampleProvider) {
        console.log('within config');
        sampleProvider.opco('congo')
       console.log("sampleProvider", sampleProvider)

    }])
    .provider('sample', [function () {

        this.opco = function(name){
            opcoName = name;
            return opcoName;
        }

        console.log("with in provider", this)
         var opcoName = "benin"

        this.$get = function () {
            providerObj = {};
            providerObj.sayHelloOpco = function(){
                 console.log("within provider sayhello function  and Opco is " +opcoName )
            }

            return providerObj;
        }

    }])
    .run([function () {
        console.log("within run");
    }])


