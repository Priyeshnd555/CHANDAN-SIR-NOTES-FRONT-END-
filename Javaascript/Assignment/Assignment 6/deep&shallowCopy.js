//shallow copy
const person = {
    name :'priyesh',
    age :'23'
}


const p = person;

p.name = 'ajay'
console.log(`person.name : `,person.name);
console.log(`p.name : `,p.name);

console.log(`here both person and p got modified as they are interconneted`);

//---------------------------------------------------------------------

const bike =
{
    brand :'tvs',
    price : 100000
};
console.log('object bike                          ',bike);

const bike2 = Object.assign({},bike)
console.log('object bike 2                        ',bike2);

 bike2.brand = 'bajaj'

 console.log(`bike.brand                          `,bike);
 console.log(`after modification bike2.brand      `,bike2);

 console.log(`Here both bike2.brand and bike.brand different because thye are present in different objects this is called deep copy`);
