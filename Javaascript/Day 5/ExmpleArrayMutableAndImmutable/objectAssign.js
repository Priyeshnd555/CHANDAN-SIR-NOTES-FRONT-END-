//  GO TO LAST FOR WARINING ABOUT Object.assign()
/* Object.assign -> only does shallow copy i.e,, say it will only copy 
   values from top layer nestedd objects will not be copied
    they will be pointing to the old nested Object 
*/
//   EXAMPLE FOR OBJECT.ASSIGN ( TARGET, SOURCE)
//                  Object.assign({},object_name)

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



/* warning :   	Object . Assign -> only does Shallow Copy does not copy nested objects they are not copied 
		
		Object.assign olny copies the upper layer of the Object 

		not the Objects that are nested inside it 
 */



// object.assign(taget,source)    can be used to create copy / merge

const person ={
    name : 'Ajay',
    age:34,
    hobbies: [ 'cricket','kabbadi'],

    Address : {
            city:'Bangalore',
            pinCode: 560062,
    }
}
// creating a copy of person Object to show shallow copy that is inside objects are not copied using Object.Assign

const  p = Object.assign({},person);

person.Address.city="Hyderabad"
console.log(person.Address.city);// prints 'Hyderabad'
console.log(p.Address.city);    // prints 'Hyderabad'

console.log('----------------------------------');

person.name = 'Abhi';
console.log(person.name);// prints Ajay
console.log(p.name);// pirnts Abhi

//----------------------------------------------------------------
