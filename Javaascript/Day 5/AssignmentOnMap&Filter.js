
// if e is present in element add it 
// if length is greater than 5 add it 
// make all the elements to upperCase 

const fruits = [ 'Apple','orange', 'kiwi','Grapes'];


console.log(fruits[0].includes('e'));

// if e is present in element add it 
const epresent =  fruits.filter(val => val.includes('e'));
 // here we are using string
// method called includes check whether e is present or not
console.log(` ${epresent.join('')} ==> elements with e are added together`);

// if length is greater than 5 add it 
const greaterThan5 =  fruits.filter(val => val.length>5);
console.log(` ${greaterThan5.join('')} ==>elements with length greater than 5 are added together`);

// make all the elements to upperCase 
const toUpper =  fruits.map(val => val.toUpperCase());
   console.log(` ${toUpper} ==> changed to upperCase`);
   



// 