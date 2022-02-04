
// For of  Loops  example 
var allElements = '';
var forOf = [ 'examples ', ' 3-x', 243, true , false , null , undefined];

for( var elements of forOf){

    console.log(elements);
    allElements+=elements+" ";
};
console.log(allElements);

//--------------------------------------------------------------------------------------


var second = [' example2 ', {name: 'priyesh', age:24}, true, false, undefined]

for (var arrayElements of second){

    console.log(arrayElements);
};

//-----------------------------------------------------------------------------------------

var third = [ true,null, , false ,,, 'third array', { name : ' darknight', lang:'english'}];

console.log('\n');
for (var arrayItems of third){

    console.log(arrayItems);
};

//------------------------------------------------------------------------------------------

var fourth = [ {1: 'hello'}, {2:'hi'}, {3:'goodMorning'}]
console.log('\n');
for (var elementsOffourth of fourth){

    console.log(elementsOffourth);
};

//------------------------------------------------------------------------------------


var fifth = [ {one: ' this is first Object'},{second:'this is second Object'}, {third : 'this is third obj', breif:'this has total of three Obejects'}];

console.log('\n');

for ( var objectElements of fifth)
{
    console.log(objectElements);
};

//-------------------------------------------------------------------------------------








