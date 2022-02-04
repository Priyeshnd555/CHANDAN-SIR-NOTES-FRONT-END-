// rest operator

//  NOTE : ==> this should the last parameter passed to the function

// like ...etc ==> (n1,n2,n3,......num)

function addNumbers (...nums){
  
    let sum = 0;

    for (let i=0;i<nums.length;i++){
                
                sum = sum+ nums[i];
    }
    console.log(`sum - `,sum)
}

// function call 

addNumbers(10,20,30);
addNumbers(10);
addNumbers(10,30,40);
addNumbers(10,30,40,70);


// default parameter
console.log('\n default parameter \n ---------------------------------------------');

function greet(name="Ajay") {

    console.log(`Welcome ${name}`);
    
}

greet('Ajay');