
// Global Scope
var x = 10 ;
console.log(x + ' global scope  var ');


// localScope
function localScope() {
    
    var x = 10;     /* Local Scope  */
    console.log(x + ' Local scope var')
}

var y = 20;
var y = 30;
console.log(y +" redeclaration + reinitialization var"); // redeclaration 


var z = 40;
z = 50;

console.log(z +"reinitailization var ");


/* 
problems with var keyword

        1.Hoisting ( i,e can access variables before declaring)
        2. block scopr is not supported 
        3. redeclaration is allowed
        4. reassigning is allowed 

        to over come these problems in ES6 Let and Const are introduced 

*/