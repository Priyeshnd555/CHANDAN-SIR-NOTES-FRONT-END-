
var numbers = [10,3,53,];
console.log('normal function \n')
numbers.forEach(function(value,index)
                    {
                    console.log(`value : ${value} \n index : ${index} \n`);
                    }

                );

// using arrow functions
console.log('arrow function \n');

numbers.forEach( (value,index)=>console.log(`value : ${value} \n index : ${index} \n`));



var books = [

    {
        title:'java',
        price:1200,
    },
    {
        title:'javascript',
        price:1500,
    },
    {
        title:'python',
        price:1000,
    }
];

books.forEach((value,index)=>console.log(`value at index :  ${index} - ${value}`));
console.log('value greater than 1000\n');
books.forEach((value,index) =>{


    if(value.price>1000){
        console.log(`value at index :  ${index} `);
        console.log(value.title)

    }
}

);

