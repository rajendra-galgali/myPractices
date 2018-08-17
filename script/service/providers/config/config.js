angular.module('configModule', [])
    .controller('configController', ['configService', '$scope', 'CONFIG', function (configService, $scope, CONFIG) {
        // console.log("CONFIG", CONFIG)
        console.log("first>>>")
        // var Object ={};
        var configData = CONFIG;
        $scope.res = configService.configServiceFunction('congo').then(function (result) {
                var opcoData = result.data;
                var o = Object.assign({}, configData, opcoData)
                angular.merge(configData, opcoData)
                console.log("after>>>", configData)
                console.log("after>>>", o)

            }
        );
        console.log("$scope.res", $scope.res)

    }])
    .constant('CONFIG', {
        "OPCO": 'CORE',
        MAX_LENGTH: 3
    })
    .service('configService', ['$http', '$q', function ($http, $q) {

        var defer = $q.defer();
        this.configServiceFunction = function (opco) {

            var url = 'script/service/providers/config/' + opco + '.config.json';
            $http.get(url).then(function (res) {
                defer.resolve(res);
            }, function (err) {
                defer.reject(err)
            })
            return defer.promise;
        }

    }])
