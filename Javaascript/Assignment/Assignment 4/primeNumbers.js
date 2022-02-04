// prime number 


// Arrow Function
var arg = 5; 
// var count=2;

var primeOrNot = (no) => {

    for(var i =2;i<=(no/2);i++){

        if(no%i===0){
            console.log(`Arrow ivoking Function : ${arg}  is not a Prime number `);
            break;
        }
        if(i===Math.floor(no/2)){
            // Since no/2 will be 0.5 more than i value we use Math.floor()
            console.log(`Arrow ivoking Function : ${arg}  is  a Prime number `);
        }
        // console.log(i );
    }
    console.log(i-1 + ' no of iterations');
    // console.log(count);
};
primeOrNot(arg);


// Anonymous Function

var arg = 7; 
// var count=2;

var primeOrNot = function(no){

    for(var i =2;i<=(no/2);i++){

        if(no%i===0){
            console.log(`Anonymous Function : ${arg}  is not a Prime number `);
            break;
        }
        if(i===Math.floor(no/2)){
            // Since no/2 will be 0.5 more than i value we use Math.floor()
            console.log(`Anonymous ivoking Function : ${arg}  is a Prime number `);
        }
        // console.log(i );
    }
    console.log(i-1 + ' no of iterations');
    // console.log(count);
};
primeOrNot(arg);



// self invoking Function

var arg = 9; 
// var count=2;

(function(no){

    for(var i =2;i<=(no/2);i++){

        if(no%i===0){
            console.log(`Self ivoking Function : ${arg}  is not a Prime number `);
            break;
        }
        if(i===Math.floor(no/2)){
            // Since no/2 will be 0.5 more than i value we use Math.floor()
            console.log(`Self Invoking  Function : ${arg} is a prime number`);
        }
        // console.log(i );
    }
    console.log(i-1 + ' no of iterations');
    // console.log(count);
}(arg));


// normal Function 



var arg = 11; 
// var count=2;

 function checkForPrime(no){

    for(var i =2;i<=(no/2);i++){

        if(no%i===0){
            console.log(`Normal Function : ${arg}  is not a Prime number `);
            break;
        }
        if(i===Math.floor(no/2)){
            // Since no/2 will be 0.5 more than i value we use Math.floor()
            console.log(`Normal ivoking Function : ${arg}  is a Prime number `);
        }
        // console.log(i );
    }
    console.log(i-1 + ' no of iterations');
    // console.log(count);
};
checkForPrime(arg);


