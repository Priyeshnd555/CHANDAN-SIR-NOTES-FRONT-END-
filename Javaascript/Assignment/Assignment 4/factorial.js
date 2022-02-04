
// this is a program to find the factorial or a number

var num = 1;
var no;
var fact =1;
function factorial(arg)
{
     no = num;
    while(no>=1){
    // 4! = 4*3*2*1;
    //      no*no-1*no-2
        fact = fact*no;
        no=no-1;
    }
console.log(`Normal Function ${num} Factorial is :  ${fact} `);
};

factorial(no);

// this is Self Invoking Function 
var num = 3;
var no;
var fact =1;
(function factorial(arg)
{
     no = num;
    while(no>=1){
    // 4! = 4*3*2*1;
    //      no*no-1*no-2
        fact = fact*no;
        no=no-1;
    }
console.log(`Self Invoking Function ${num} Factorial is :  ${fact} `);
}(no));


// this is anonymous Function 

var num = 5;
var no;
var fact =1;
var factorial= function (arg)
{
     no = num;
    while(no>=1){
    // 4! = 4*3*2*1;
    //      no*no-1*no-2
        fact = fact*no;
        no=no-1;
    }
console.log(`anonymous Function ${num} Factorial is :  ${fact} `);
};

factorial(no);

// this is arrow function 

var num = 7;
var no;
var fact =1;
 var factorial = (arg)=>
{
     no = num;
    while(no>=1){
    // 4! = 4*3*2*1;
    //      no*no-1*no-2
        fact = fact*no;
        no=no-1;
    }
console.log(`Arrow Function ${num} Factorial is :  ${fact} `);
};

factorial(no);