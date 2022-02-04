
// rest operator - Example -1 


function restFunc(n1,n2,...etc){
    console.log(`Example 1`);
    console.log('[ n1 =',n1,']  , [n2 =',n2,`]  ...etc : `,etc);
}

restFunc(2,243,3,23,23412,12,123);

// here n1= 2, n2=243, ...etc = [ 3,23,23,123]
//----------------------------------------------------------------------------------------------------------

//Rest Operator - Example-3

function restFunc2(n1,n2,...etc){

    console.log(`\nExample -2 `);
    console.log(`...etc : `,etc);
}

restFunc2(2,243,3,23,23412,12,123);


//spread Operator

const p1 = { name1 :  'priyesh',age:34}
const address = {city:'bangalore'}

const {name1
     '',age,city} = {...p1,...address}

console.log(`name : ${name1} , age : ${age},  city : ${city}`);
