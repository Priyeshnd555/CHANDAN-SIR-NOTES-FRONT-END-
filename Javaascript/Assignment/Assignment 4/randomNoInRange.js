// random no in range




var inRange= (max, min)=>{

    var random = Math.ceil(Math.random()*100);// to make sure the no is not zero 
//   console.log(random);

    var randomInRange = random*(max-min)/100;
    console.log(Math.ceil(randomInRange)+' Arrow function');
};

inRange(45,12);

// normal Function

function inRange(max, min){

    var random = Math.ceil(Math.random()*100);// to make sure the no is not zero 
    // console.log(random);

    var randomInRange = random*(max-min)/100;
    console.log(Math.ceil(randomInRange)+' Normal Function');
};

inRange(45,12);


// Anonymous Func


var inRange = function(max, min){

    var random = Math.ceil(Math.random()*100);// to make sure the no is not zero 
    // console.log(random);

    var randomInRange = random*(max-min)/100;
    console.log(Math.ceil(randomInRange)+' Anonymous Function');
};

inRange(45,12);


// Self invoking or Immediately Invoking Function 



(function(max, min){

    var random = Math.ceil(Math.random()*100);// to make sure the no is not zero 
    // console.log(random);

    var randomInRange = random*(max-min)/100;
    console.log(Math.ceil(randomInRange)+' Self Invoking  Function');
}(45,12))
