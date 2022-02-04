
var fruits = ['banana', 'orange', 'apple', 'mango',];

console.log(fruits.length);

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

for(var i =0;i<fruits.length;i++){
    console.log("the value of fruits["+i+"] is "+ fruits[i])
}
console.log('\n');

for(var i =fruits.length-1;i>=0;i--){
    console.log(`fruits value at fruits[${i}] is ${fruits[i]}`);
}
console.log('\n\n this is a new arary with values of multiple data-types\n');

var Boo = [false, true,'hello', 54, 'red', null, 'zero',0, undefined];

Boo.length=0; // this deletes the entire array 
Boo=[] // this also deletes the entire array elements


for(var i =0;i<Boo.length;i++){
    console.log(`fruits value at fruits[${i}] is ${Boo[i]}`);
}


var arrayObject = [
    {
        name:'priyesh',
        age:'23',
    },
    {
        name:'maya',
        age:'24',
    },
    {
        name:'kruthika',
        age:'22',
    },
    {
        name:'alexander',
        age:'124',
    },
    {
        name:'ceaser',
        age:'2100',
    },
];

for(var i =0;i<arrayObject.length;i++){
    console.log(`name : ${arrayObject[i].name} \n age : ${arrayObject[i].age}`)
};


var books = [
    {
        title:'javascript -1',
        price:500,
    },
    {
        title:'js -2',
        price:3750,
    },
    {
        title:'js - 3',
        price:1000,
    }
]

for(var i =0 ; i<books.length;i++){
    if(books[i].price>1000){
        console.log('\n');
        console.log(books[i]);
    }
}

for(var i =0; i<books.length;i++){
    if(books[i].title.length>8){
        console.log(books[i]);
    }
}

console.log(new Date());