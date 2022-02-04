// Named Functions
var sum = add(5,6);

function add(n1 , n2){

    return n1+n2;
}
console.log('\nthis is a named function\n'+sum);

// anonymous funcitons
console.log(' \nthis is anonymous funciton ');
var anonymFunc = function (a1,a2){
    return a1+a2;
}

var res = anonymFunc(6,4);
console.log( res);


// Immediately  invoked funciton expression
// self - invoked funciton 
// before self invocation function it is mandatory to write 
// ; we need to use semi- colon 

// its mandatory
console.log('\n');
(function (a,b){
  
    console.log('this is an immediately invoked function ');
    console.log(`sum : ${a+b}`);
    console.log(`sub : ${a-b}`);
    console.log(`mul : ${a-b}`);
    console.log(`div : ${a/b}`);
})(5,6);


