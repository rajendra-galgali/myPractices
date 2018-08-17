angular.module('main', ['secondModule', 'firstModule', 'rootScopeModule',
    'objectArrayModule', 'tableDataModule', 'formValidationModule', 'routeModule',
    'firstDirectiveModule', 'serviceModule', 'secondServiceModule', 'factoryModule', 'configModule',
    'mythirdproviderModule', 'route_params', 'tableDataSortModule', 'paginationModule', 'direPagintionModule',
    'directiveParentChild', 'dirParentChildAttr', 'compileModule', 'dirParentChildAttr1', 'directiveTest', 'preDirective']);



/***angular bootstrap should be at the end, document.documentElement -- html ,
 console.log("document.documentElement",document.documentElement) *****/




angular.bootstrap(document.documentElement, ['main'], {strictDi:true});
/*
 rootScopeModule
 mySecondproviderModule
 myproviderModule
 mythirdproviderModule
 */
