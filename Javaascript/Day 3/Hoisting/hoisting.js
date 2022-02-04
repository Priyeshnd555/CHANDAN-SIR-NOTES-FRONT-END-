

console.log(x);

var x=10;

console.log('---------------------------');

function hoist(){
    console.log(y);
    var y = 20;
}

hoist();
// this is important
console.log('-----------------------------');

var x =10;
function test(){
    // output is undefined .............
    // first preference is given to Local varible it wont go outside and take the value of global variable
    console.log(x);
    var x=40;
   
}
test();
console.log('--------------------------------');

console.log(x);


//--------------------------------------------------
console.log('-----------------------------');

var x =10;
function test(){
  
    console.log(x);
    // the output is 10 since there is no local variable declared and so Local variable is 
    // taken output == 10 
   
}
test();
console.log('--------------------------------');

console.log(x);


//--------------------------------------------------

// HOISITNG IN FUNCTIONS

getId();

function getId(){
    console.log('function declaration is hoisted so this runs')
}

//--------------------------------------------------------

gotId(); 
// uncaught type error gotId is not a function 
// only var declaration is moved to top not function declaration 
var gotId = function(){
    console.log('This is an error because Only variable is moved not the function stored inside it');
}

//------------------------------------

gtId();

var gtId = () =>{
    console.log('This is an error because Only variable is moved not the function stored inside it');
}

// UnCaught type rerror gtId is not a function

//-----------------------------------------------------------------------------------