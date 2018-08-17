define(['angular',
    'routes/routes'

], function(angular){

    angular.module('app', ['routesModule']);


    angular.bootstrap(document.documentElement, ["app"], {strictDi:true})
});
