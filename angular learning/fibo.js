'use strict';
let fib = []; 
fib[0] = 0;
fib[1] = 1;
for(let i=2; i <= 15; i++){

	fib[i] = fib[i-2] + fib[i-1];
	console.log(fib[i]);
}