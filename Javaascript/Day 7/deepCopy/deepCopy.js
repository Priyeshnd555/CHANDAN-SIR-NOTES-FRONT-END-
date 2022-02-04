

const person = {

    name : "priyesh",
    age : 23,
    address:{
        city:"bangalore"
    }
};


const stringifiedPerson = JSON.stringify(person);
console.log(`After conversion from js to JSON`, stringifiedPerson);

console.log('------------------------------------------');


// this is a copy of person object in which values are not interconnected with person object
// this is immutable object

//can use this for DEEP COPY
const jsPersonCopyObject = JSON.parse(stringifiedPerson)// if u use  object key should not contain
//function then u will get error with JSON.parse u wont get eror with stringify
console.log( JSON.stringify(jsPersonCopyObject));

console.log(`After conversion from JSON to JS `, jsPersonCopyObject);

jsPersonCopyObject.address= 'hydersabad'

console.log(person.address.city);
console.log(jsPersonCopyObject.address.city);
