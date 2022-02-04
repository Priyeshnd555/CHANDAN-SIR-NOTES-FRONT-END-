
 

// const date = new Date()
//     console.log(date.toLocaleTimeString());

// const myTimeInterval =  setInterval(myTimer,2000);



// function myTimer(){
//     console.log('\n');
//    var time= date.toLocaleTimeString();

//    console.log(time);
   

// };


const interval = setInterval(() => {
    console.log('interval');
    
}, 1000);


setTimeout(()=>myFunc(interval),8000); /// it is important to use arrow func
// because set interaval calls only a function not a varible also 

function myFunc(arg) {

    clearInterval(arg);
    
}
