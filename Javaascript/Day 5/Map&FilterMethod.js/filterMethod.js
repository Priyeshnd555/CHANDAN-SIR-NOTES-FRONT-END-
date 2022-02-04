console.log('--------------------------------\nNumbers Greater than 150 \nin array nums = [100,200,300] \n ');

 // filter method creates a new array and then checks for the condition 
 // & only store truthy values into the new array and returns it

const nums = [ 100, 200,300]

const numsGreaterThan150 = nums.filter(val => val>100 );
console.log(`numsGreaterThan150 are : ${numsGreaterThan150}\n------------------------------------------\n`);

const numsGreaterThan150usingFunction = nums.filter(function (val, index) {
 return val>150 ;
});
console.log(`numsGreaterThan150usingFunction : ${numsGreaterThan150usingFunction}`);

console.log('--------------------------------------------');