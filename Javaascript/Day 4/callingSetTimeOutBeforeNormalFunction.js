
// Order of Excecution 
/* 
NOTE ::  TO GET OUTPUT OF setTimeOut first and then then the normal function 

		we can simply pass the second function to first function as an argument and we can 

		call the second function inside the setTimeOut func so now only after setTimeOut is called 
			
		the Second function is gets called  */

function First(test){

    setTimeout(function(){
        console.log('1. this is a timeout ');
        test()// here we are calling the second function 
    },0);
    console.log('first function outside settimeout');

};

function second(){
    console.log('second function ');
}


function Three(){
    console.log("Third function ");
}

First(second);

Three();

