// Anonymous Func
var n1 = 0;
var allNo='';
var temp;
var fibonaci = function (n1,n2){
                    
                for(var i =0;i<5;i++){
                    allNo=allNo+`${n1} , ${n2}, `;
                    n1 = n1+n2;
                    n2 = n1+n2;
                }
                console.log(`${allNo} : Anonymous Function`); 

};
fibonaci(0,1);

// Normal Func
var n1 = 0;
var allNo='';
var temp;

function fibonacci(n1,n2){
                    
                for(var i =0;i<5;i++){
                    allNo=allNo+`${n1} , ${n2}, `;
                    n1 = n1+n2;
                    n2 = n1+n2;
                }

                console.log(`${allNo} : Normal Function`); 
            };
fibonacci(0,1);


// Arrow function
var n1 = 0;
var allNo='';
var temp;

var fibonacci= (n1,n2)=>
{
                    
                for(var i =0;i<5;i++){
                    allNo=allNo+`${n1} , ${n2}, `;
                    n1 = n1+n2;
                    n2 = n1+n2;
                }

                console.log(`${allNo} : Arrow Function`); 
            };
fibonacci(0,1);


// Self-Invoking Func
var n1 = 0;
var allNo='';
var temp;

(function fibonacci(n1,n2){
                    
                for(var i =0;i<5;i++){
                    allNo=allNo+`${n1} , ${n2}, `;
                    n1 = n1+n2;
                    n2 = n1+n2;
                }

        console.log(`${allNo} : Self invoking Function`); 
}(0,1));


