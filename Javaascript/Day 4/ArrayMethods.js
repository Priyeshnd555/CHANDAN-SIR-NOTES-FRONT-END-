                                /*   Array.isArray(Array_name) Method

                                        para: array to be checked 
                                        return type: BOOLEAN
                                        fucntionality: check whether array or not 
                                        */

// how to check whether it is an array or not 
// since typeof operator returns Object for array as output
var isNumberArray = [23,235,23,2234,35,21,]

// use Array.isArray(Array_name))---Method
console.log('is isNumberArray is Array : '+Array.isArray(isNumberArray));

// Example 2 
var person ={

    name:'priyesh',
    age:23,
}

// check wheather this is an arrya or not 
console.log(`is person is Arrray : `+Array.isArray(person));// False 

// ----------------------------------------------------------------------------------

                                /*Array_name.Push 
                                
                                para : new elements
                                returntype: new array length
                                Functionality ; add new elements at the end of array
                                */


console.log('\nArray_name.Push Method');
var num =[3,235,32,23,1,]
var numlength = num.length; console.log(`Length of arary num is ${numlength}`);

var newLength = num.push(23,345,2,2)

console.log(`New length of num array is ${newLength}`);


/*                            Array_name.pop()

                                parameter: no parameter
                                returnType: last Element that is removed
                                functionality: removes last element from the array

*/
console.log('Pop method \n');

var num = [ 23,23,235,23,45,30,]
console.log(` Original Array is  ${num} \n`);
var removeElement  = num.pop();

console.log(`new Array is ${num}`)
console.log(`removed element is :  ${removeElement}`)



                                // Array_name.includes 
                                console.log('\n Array_name.Includes method\n')
    var num = [30,25,352,3,5]
    console.log(`numbers - ${num}`);
    const hasThirty = num.includes(30);
    console.log(`The array num[] has 30 :  ${hasThirty} `);


    const hasElement = num.includes(50000);
    console.log('Has Element 5000 - ${hasElement}');

    const hasTwenty = num.includes(3,3);// True
    // const  hasTwenty = num.includes(3,4);// False
    console.log(`has Element 3 from index 4 ${hasTwenty}`);


                                // Array_name.unshift

                                // Array_name.shift

//----------------------------------------------------------------------
console.log('------------------------------------------------------------\n Splice Method\n ');
                                 // splice Method 

const n = [ 20, 40, 50,60] ; console.log('before splice'+n);

const returnElement =n.splice(2,2,70,100);   
 console.log('ReturnElement / Deleted Itemsof splice',returnElement);//returns array of deleted item 

 console.log(`After slice ${n}`);

 console.log('---------------------------------------------------\n');


 console.log('---Slice method-----------\n');

 const sliceNumbers = [ 10,20,30];
console.log(`Before lsice ${sliceNumbers}`);
const returnFromSlice = sliceNumbers.slice(1,2) // start index 1 end index 2 but it does not element at end index 

console.log(`After Slice ${sliceNumbers}\n`);
console.log(`Return from slice (1,2) :[${returnFromSlice}] `);

console.log('-------------------------------');


// logic to check wheathe 30 is present or not 
const indexof = [ 10,30, 45,]

if(indexof.indexOf(30)!==-1){
    console.log(`30 is present`);
}
else{
    console.log(` 30 is not present`);
}
console.log(`30 is present index of 30  : ${indexof.indexOf(30)}\n ---------------------------------\n`);


// join present 
const numbs= [ 123,35,65,346,63,]
const numbsWithHifen = numbs.join('-');
console.log(`numbsWithHifen - ${numbsWithHifen}\n --------------------------------\n`);