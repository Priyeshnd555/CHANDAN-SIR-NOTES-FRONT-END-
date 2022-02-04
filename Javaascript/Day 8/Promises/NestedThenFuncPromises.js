
// example for Nested then function

const myPromise = new Promise(function(resolve,reject){

    if(10>5){

        const arr = [ 100, 200,,250, 400,434, 300,]

        resolve(arr);
    }
    else{
        reject('Failed to get Data')
    }
});


// promise call

myPromise.then(function(data){

    // filter the data for greater than 200

    const filterData = data.filter(val=>val>200);
    console.log(`filtered data`, filterData);

        return filterData // without return statemnt the next then() 
      // otherwise  function wont get data gives wrong ouput
}).then(function(filterData){
    console.log(`2 nd then func Filtered then from one `,filterData);
}).catch(function(error){
    console.log(`Failed to get Data`);
});
