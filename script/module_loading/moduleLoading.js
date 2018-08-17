import  module2 from './controllerLoading.js';
import  module3 from './service.js';



angular.module('mainLoading', [])
    .controller('module2', module2)
    .service('module3', module3);



//http://localhost:5060/script/module_loading/main.html