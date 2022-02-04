//For in Loop for Objects and Arrays


// For in Loop 

// using Objects

// first 

console.log(`\nFirst loop `);
var one = {
    name : ' priyesh ',
    mob : ' 3365346435',
    emailId: ' priyeshnd555@gmail.com'

};

for ( var keys in one)
{
    console.log(`${keys} : ${one[keys]}`);
}

// Second Loop
console.log(`\nsecond loop`);
var two = 
{
    name : ' priyesh',
    accNo : '234366435',
    Bank : 'state Bank of India',
};

for(var items in two )
{
    console.log(`${items} : ${two[items]}`);
}

// Third Loop--------------------------
console.log(`\nThird Loop `);
var third = 
{
    name: ' pryesh ',
    degree: ' B.E',
    college: ' Govt Engg college',
    place : ' hassan',
};

for(var keys in third)
{
    console.log(`${keys} : ${third[keys]} `);
}
 // -------------------------------------------------------------------------------

//Fourth Loop ---- Arrays 

var fourth = [ ' fourth ', true , false, null, undefined,];
console.log('\nFourth\n');
for(var keys in fourth)
{
    console.log(`${keys} : ${fourth[keys]}`);
};

//---------------------------------------------------------------------------------


// Fifth -- Arrays
console.log(`\nFifth Loop`);

var fifth = [ 'fifth', null, undefined , true, false, 234,];

for(var keys in fifth)
{
    console.log(`${keys} : ${fifth[keys]}`);
}
