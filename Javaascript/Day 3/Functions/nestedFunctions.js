// Error important
function app(a,b){

    console.log('hello this gives an error');
}
var error = app();
// this happens because theres no function inside app() so you  get an error


// nested functions 

function app(a,b){
/// this is giving an error check it out 
    return function sm (){
        return  function sum (){
             console.log(a+b);
        }
    }
};


var nest = app(5,6)()(); 


// nested functions 

function app(a,b){

    return function sum (){
        return console.log(a+b);
    }
}

var nestedFunction = app(5,6);
/// this is called currying of function 
nestedFunction();



// nested functions  

function app(a,b){

    return function sum (){
        return a+b;
    }
}

var nestedFunction = app(5,6)();
// writing nestedFunction is enough since we are calling the function 
// it can be called using variable name only parenthesis not needed
console.log(nestedFunction);