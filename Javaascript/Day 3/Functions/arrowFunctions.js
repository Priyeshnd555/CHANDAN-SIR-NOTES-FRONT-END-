/* 
in arrow Functions 

for one line of statement return statement is not mandatory 
also for one para () is not mandatory
*/

var arrowFunc = arg => console.log(arg);

arrowFunc('hello')

// this is second method of  calling 

var greet = arg => {
    return arg;
};
console.log(greet("this is greeting"));

// this is arrow function using Template literals

var greeting = name => `This is greeting ${name}`;

console.log(greeting('priyesh'));


