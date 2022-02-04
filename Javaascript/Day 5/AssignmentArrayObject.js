/*  note : here after calling map function the origanal array also get modified 

because in the array  only the address will be stored in the array

 but when we modify the object  the new copy newArray will also point to the same 
 old object 

--------------------------------------------------------------------------------
IMPORTANT 

 // to make the original array IMMUTABLE 

 when map function is called
    1. one new array is created it will not create  new Objects 
    2. so orginal arrray of object gets modified 

    3. to prevent this new Object 

        items.map(val => {
            
            const valCopy = Object.Array({},val);
             // here in object and array though the variable is of const type 
             // inside values can be changed

     example: -> value of const array  can be changed 
                --->    [ const a = [ 3,35,234,];  a[0] = 34;  console.log(a); ]

            valCopy.price += 100
            
            return valCopy ;
        });


*/



// price greater than 800 in a new array
// name length greater than 8
// add 100 to price
// name to uppercase


const items = 
[
    {
        id:1,
        name:'lipstick',
        price:600
    },
    {
        id:2,
        name:'bangles',
        price:1000
    },
    {
        id:3,
        name:'Trimmer',
        price:1000,
    },
    {
        id:4,
        name:'beardOil',
        price:1000
    },

]


const graterthan1000 =items.filter(val=>{
     return val.price>=1000;  
    
});
console.log(`items with price greater than 1000 `);
console.log(graterthan1000);

const namelengthMoreThaneight = items.filter(val=>{
    
    
    return val.name.length>5;
});
console.log(namelengthMoreThaneight);


const addHundred = items.map(val=> {
    val.price+=100 ;
    return val;
})
console.log(`100 addedd to items price`,addHundred);

const toUpperCase = items.map(val=>{ val.name = val.name.toUpperCase() ;return val})
console.log(`items to uppercase ->` , toUpperCase);


console.log(`items `);
console.log(items);


