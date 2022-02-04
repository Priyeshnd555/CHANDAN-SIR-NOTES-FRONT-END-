

const  str =  "priyesh";

//split Method 
console.log('----------------------------');
const  strSplit = str.split('')
console.log(`strSplit`, strSplit);

// charAt()
console.log('----------------------------');
const charAt = str.charAt(6); // index statrs from 6
console.log(`CharAt index is : `+charAt);


//concat method()
console.log('-------------------------------------------------');
const concat = str.concat(',is my name','\n company : TestYantra');// new line working
console.log(`str after concatination is : `,concat);

//endsWith()
console.log('---------------------------------------------------');
const endsWith = str.endsWith('h');
console.log(`str ends with 'h' : `,endsWith);

//includes()
console.log('---------------------------------------------------');
const includes = str.includes('t');
console.log(`str includes 't' : `,includes);


//indexOf()
console.log('----------------------------------------------------');
const indexof = str.indexOf('p');
console.log(` indexOf  p : `+ indexof);

//lastIndexOf
console.log('--------------------------------------------------------');
const lastIndexOf = str.lastIndexOf('e');
console.log(`last index of e : `,lastIndexOf);


//replace
console.log('---------------------------------------------------------')
const replace = str.replace('p','a');
console.log(`str replace i -> a : `,replace);

//slice() method
console.log('---------------------------------------------------------')
const slice = str.slice(0,3);
console.log(`str slice from 0->3 : `,slice,`,  string str is ["${str}}]`);

//substr() method
console.log('-----------------------------------------------------------');
const substr = str.substr(0,1) // start index -> length; // index from [1->n ]
console.log(`str substr : `,substr);

//substring() method
console.log('------------------------------------------------------------');
const substring = str.substring(0,1);// index starts from 1
console.log(`str substring(0,0) : `,substring);

