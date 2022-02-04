
console.log(`js started`);


const promises = new Promise(function(resolve,reject){

    if(10>5){
        resolve('10 is greater than 5')
    }
    else{
        reject('10 is less than 5')
    }
});


/// promise call

promises.then(function(result){
    console.log(result);
}).catch(function (error){
    console.log(error);
});

function normal(){
    console.log(`This is a normal func executes before promises `);
}

normal();

console.log(`js Ended \nexecuted after normal func and befor promises\n-----------------------`);

