//For Each method this is a method not a Loop i,e.. should not use Break Statement 
// it will break the entire code 

// First one
console.log(`first one `);
const fruits = [ 'apple', 'mango', 'kiwi', 'banana'];
fruits.forEach(myFunction);
// console.log(forEach);
function myFunction(item,index) {
  
    console.log(`${index} : ${item}`);
}
console.log(fruits);

//---------------------------------------------------------
console.log(`second  one \n `);
const cars = [ 'toyota', 'suzuki', 'tata','renault'];
cars.forEach(availableInIndia);

function availableInIndia(item,index) {
    console.log(`${index} : ${item} Available in india`);
}

//------------------------------------------------------------
console.log('.............................................\nThird one\n');

const cities = [ 'bangalore', 'mysore', 'mangalore', 'shivamogga', 'hubli'];

cities.forEach(stateOfCities);

function stateOfCities(item,index){
    console.log(`${index} : ${item} is present in karnataka`);
}

//--------------------------------------------------------------------
console.log('-------------------------------------\nFourth example');

const  languages = [ 'javascript', 'java','python',];
languages.forEach(isProgrammingLanguage);

function isProgrammingLanguage(item,index) {
    console.log(`${index} : ${item} is a programming Language`);
}

//----------------------------------------------------------------------


console.log('---------------------------------------\nFifth example');

const animals = ['dog','cat','lion','horse',]

animals.forEach(animalOrNot);

function animalOrNot(item,index) {
    console.log(`${index} : ${item} ==> is a animal`);
}

//---------------------------------------------------------------------
