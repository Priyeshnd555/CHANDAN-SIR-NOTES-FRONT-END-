

/// adding numbers from 1-10 using recursion


function addPrevious(num){
    let number = num-1;
//    console.log(number);
    // if(num===0){
    //      return 0 ;
    // }
    // else{
    //     return num+addPrevious(num-1);
    // }

    return (num===0)?0:num+addPrevious(num-1); // both works 
}

const sum = addPrevious(10)

console.log(`sum of number`,sum);