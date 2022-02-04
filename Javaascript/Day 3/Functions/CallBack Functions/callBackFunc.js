
function test(x){
    
    console.log('this method');
    x();
}

function sample(){
    console.log('samplemethod');
}

test(sample());
 /* 
 
 if you use test(sample()) then sample runs first and then test runs
 but if u still again call sample func u get a error because u 
 are calling sample fucn while calling test 
 but u are not sending any functions as variable 
 to test func so u get an error

 */
