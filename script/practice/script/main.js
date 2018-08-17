require.config({
    baseUrl:'script',
    paths:{
        angular:'/lib/angular/angular.min',
        loadash:'/lib/lodash/lodash',
        'angular-ui-router' :'/lib/angular-ui-router/release/angular-ui-router.min'
    },
    shim:{
        'angular':{
            exports: 'angular'
        },
        'loadash':{
            exports:'loadash'
        },
        'angular-ui-router':{
            exports:'angular-ui-router'
        }
    },
    deps: ['app']
})