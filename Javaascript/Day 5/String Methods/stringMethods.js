
///    STRINGS ARE IMMUTABLE  

// whenver we apply a function on string we need to store them in a another variable or use let keyword and reassign it 


// toUppercase Method

let str = 'hello'
str = str.toUpperCase();
console.log(`str - ${str} => to UpperCase`)


// To Lower Case 
str = str.toLowerCase()
console.log(`str - ${str}   => to lower Case`);

// indexOf method

const indexOfE = str.indexOf('e');
console.log(`str -index of E : ${indexOfE}`);

//concat method
const greet = str.concat(' ,GoodMorning','hello ','second ');
console.log(` str - concat of str : ${greet}`);

// inclused Method
const includesO = str.includes('o')
console.log(` str - includes o : ${includesO}`);

// replace method 

// replace method only replaces the first occuring characrter is only replaced
const replaceH = str.replace('h','H')
console.log(` str - replace h->H :  ${replaceH}`);



// // replaceAll 
// const replaceAll = str.replaceAll('l',"L");
// console.log(`replace All h-> H in str : ${replaceAll}`);


// substr method 
const extrtedString = str.substr(1,3);
console.log(`extrtedString -${extrtedString}`);

//subString method
const extractedString1 =  str.substring(1,3)
console.log(`extractedString1 - ${extractedString1}`);

 // trim method
 const note = '   Hello, welcome to TY  '
 console.log(`Befor trim ${note}`);

 const noteAfterTrim =  note.trim()
 console.log(`note After Trim - ${noteAfterTrim}`);

 // trimleft
 const noteTrimLeft=  note.trimLeft()
 console.log(`note After Left Trim - ${noteTrimLeft}`);

 // trim right
 const noteTrimRight = note.trimRight()
 console.log(`note After Right Trim - ${noteTrimRight}`);
 
 
//split Method
// const strings = ' welcome to test yantra'
const data = 'hello'
const dataAfterSplit = data.split(' ')// separates based on whitespaces
console.log('\n----------------------------------');

console.log(`After split -> ${dataAfterSplit}`);

// Example for reverse of  string
const reverseString = data.split('').reverse().join('')
console.log(`reveresedString -> ${reverseString}`);
console.log('----------------------------------');





