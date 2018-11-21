'use strict';
var empDetails = (function () {
    let empObj = {
        "name" : "",
        "age" : ""
    }
    console.log("in ",this)
    return function () {
        console.log(this);
        empObj = {
            "name" : "rajendra",
            "age" : "25"
        }
        return empObj;
    }
})();

console.log(empDetails ());