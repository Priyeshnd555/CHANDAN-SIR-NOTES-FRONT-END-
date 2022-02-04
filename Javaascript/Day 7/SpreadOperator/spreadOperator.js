
const person = 
{
    pName: 'Ajay',
    age : 30
};

const personCopy = {...person}// any changes to person/personCopy will not affect each other upto 1 layer
console.log(`presonCopy`,personCopy);

console.log('-----------------------------------');

const numbers = [ 10.20,30]
const numbersCopy = [...numbers];// any changes to person/personCopy will not affect each other upto 1 layer
console.log(`numbersCopy`,numbersCopy);

console.log(`-------------------------------------------`);

const person1 = {
    age : 40,
    pName : 'Guru'
}

const address = 
{
    city : 'Bangalore',
    pincode : 560068,
}

                    // merging two objects into one
const personAddress = { ...person1,...address};
console.log(`two objects are merged into one using spread operator`);
console.log(personAddress);




/// WHEN  U HAVE TO DESTRUCTURE FORM 2 DIFF OBJECTS AT ONCE 

console.log(`WHEN  U HAVE TO DESTRUCTURE FORM 2 DIFF OBJECTS AT ONCE \n`);
console.log(`--------------------------------------------------------`);
    const { pName, city} = {...person,...address};

    console.log(`pName from person : `, pName);
    console.log(`city from address : `,city);



    const p = {
        name:'pry',
        ages:20,

        Address: {
            citys1:'bangalore'
        }
    }

    const { citys1 } = {...p.Address}

    console.log(citys1);