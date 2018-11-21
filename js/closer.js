
var add = (function() {
    var c = 0;
    return function () {
        return c +=1;
    }
})()
console.log(add());
console.log(add());
console.log(add());
