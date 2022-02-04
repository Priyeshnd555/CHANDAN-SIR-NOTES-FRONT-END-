
// primitive types are immutable

let name1 = 'Ajay';
let nameCopy = name1;

console.log(`name1 -${name1}`); // prints Ajay
console.log(`nameCopy - ${nameCopy}`);// prints Ajay


/* When we change the data of  name1 variable it will not affect the data
of namceCopy Variable */

name1 ='Girish'
console.log(`name1 - ${name1}`); //prints Girish 
console.log(`namecopy - ${nameCopy}`); // prints Ajay


// Reference types are mutable
// Example for mutable

const person = {
    name : 'Vijay',
    age : 30,
}

const personCopy = person;
console.log(person.name); // prints Vijay
console.log(personCopy.name);// prints  Vijay

/*  When we change the data of person object variable it will affect the 
data of personCopy variable because in memory both 
person and personCopy variables are pointing to same object */


person.name='Abhi'
console.log(`name - ${person.name}`);// prints Abhi;
console.log(`nameCopy - ${personCopy.name}`);// prints Abhi



// Make the Object Immutable


const car = {
    color:'red',
    model:234,
    brand: 'bmw'
};

const carCopy = Object.assign({},car);
console.log(car.model+': old object');
console.log(carCopy.model+' : new Object');

console.log('---------------------------');

carCopy.model = 2022;
console.log(car.model+' : old Object');
console.log(carCopy.model,' : new Object');


// Example for Array Mutable // creating a copy of array which is modifeid mutable
console.log(`-----------------------------------\nExample for Array Mutable\n`);
let n = [10,20,30]
console.log(`before modification :  n-[${n}]`);
let n1  =n ;
console.log(` n is assgined to n1 => n1-[${n1}]`);
n=[50]
console.log(`after modification n is mutated:  n-[${n}]`);
console.log(`n is modified to n=[50] mutated  but n1 is not get changed ==>n1-[${n1}]`);


//Example of Array Immutable // creating a copy of array which is immutable
console.log(`\n----------------------------------------\nExample for array Immutable\n`);

let numbers = [100, 200,300, 400, 500,]
let numberCopy = numbers.slice(1)
console.log(`numbers-${numbers}`);
console.log(`numbersCopy - ${numberCopy} \n ----------------------------------------\n`);