console.log('Object Destructuring\n------------------------');

// Object And Array Destructuring


const person = 
{
    name1 : 'priyesh',// we cannot use name because IN-BUILT KEYWORD
    age : 34,
}

//object Destructuring
const { name1, age} =   person; // to igonore elements just add ( , ) 
//inside {,,} corresping element in array or object will be ignored

console.log(`name1 : `,name1);
console.log(`age : `,age);

console.log(`-------------------------------------------------------\nArray Destructuring\n-------------------------------------------------------`);
                                    // ARRAY DESTRUCTURING

//-------------------------------------------------------------------------------------

const array = [ 'dancing ', 'drinking', ' travelling'];

const [ a,b,c ]  = array;

console.log(`a : `,b);
console.log(`b : `,b);
console.log(`c : `,c);




// some more Examples
// DESTRUCTURING NESTED OBJECTS

console.log(` IMPORTANT DESTRUCTURING NESTED OBJECTS\n----------------------------------------`)

const personData =
{
    name : 'peirye',
    age : 34,

    address : {
        city: "bangalore",
        pincode : 34536
    },
    hobbies : ['reading','disco']
}

// destructuring nested Objects
const { city,pincode}= personData.address;

console.log(`city : `,city);
console.log(`pincode : `,pincode);


// destructuring Nested Array

const {hobbies: [hoby1, hoby2]} = personData;

console.log(`hoby1 :  `,hoby1);
console.log(`hoby2 : `,hoby2);

// deep Object destructuring 

const personD =
{
    name2: 'peirye',
    ages : 34,

    address : {
        citys: "bangalore",
        pincodes : 34536
    },
    hobbies : ['reading','disco']
}

/// deep object destruturing
console.log('------------------------------------------\n Deep array / nested array Destructuring');
const { name2, address:{citys,pincodes}} = personD


console.log(`name2 : `,name2);
console.log(`citys : `,citys);
console.log(`pincodes : `,pincodes);

console.log('-------------------------------');
