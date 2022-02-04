

function printNum (num){

    console.log(num);

    let number = num-1

    if(number>0){
        
        printNum(number)
    }
    
}

printNum(5)