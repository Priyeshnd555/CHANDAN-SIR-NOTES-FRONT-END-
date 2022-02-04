
// let keywoed 

console.log('-------------------------------')

                let a = 10 ;

                console.log('Global Scope ',a);

console.log('----------------------------------------');



function accessLetVariables() {

    console.log('inside Function ', a);
    
}
accessLetVariables();

console.log('----------------------');
for ( let j=0;j<3;j++){

    console.log(j);// j is block scoped accessing outside results in reference Error

}
// console.log(j); this throws a reference error because j is block Scoped 

//
// console.log(b); Uncaught ReferenceError: Cannot access 'b' before initialization

let b = 23;  
// Error : cannot be accessed before initialization 
// because of HOisting it knows it is declared thats why
// it is saying cannnot access variable before initialization Due to
// Temporal Dead Zone

let c = 20 ;
// let c = 40 ==> SyntaxError: Identifier 'c' has already been declared


console.log('-------------------------------------------\n');
console.log( ' reassigning the let variable ');
let d = 100 ;
console.log(d);

d=10;
console.log(d);

console.log('-------------------------------------------------\n');

console.log(' \n Const keyWord');

 /*  console.log(p); Uncaught ReferenceError: Cannot access 'p' before initialization */
const p = 30;

console.log('--------------------------------------------------\n');


// for(const k = 0;k<3;k++){ Uncaught TypeError: Assignment to constant variable.
//     console.log(k);
// }

// console.log(k);

console.log('---------------------------------------------------');

if(10>6){

    const name = ' priyesh ';// block scope
    console.log(`Name  - ${name}`);
}
// console.log(name); ReferenceError: name is not defined

console.log('------------------');

// Function Scope

function constFunctionScope() {

    const r = 10 ;// Because of Block / Function Scope
    //is defined inside function so can  only be  accessible within the function 
    console.log(r+" const r declared inside function ");
}
constFunctionScope();

// console.log(r); Uncaught ReferenceError: r is not defined because of Block Scope


console.log('------------------------------------------------------------');

const n = 235;
// const n = 234; SyntaxError: Identifier 'n' has already been declared

// n = 345; TypeError: Assignment to constant variable.

console.log('----------------------------------------------------------');
                            // Important 
const fruits = [ 'apple', ' Mango0', ' Banana', 'Grapes ', 'Dragon '];
// fruits = [ 'apple', ' Mango0', ' Banana', 'Grapes ', 'Dragon '];Uncaught TypeError: Assignment to constant variable.
console.log(fruits);

fruits.push('kiwi')
console.log(fruits);