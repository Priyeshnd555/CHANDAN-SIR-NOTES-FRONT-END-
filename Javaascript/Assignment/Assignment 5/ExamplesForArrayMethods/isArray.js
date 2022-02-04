// isArray 

const  num = [23,5435,3,5,2];

const one = Array.isArray(num)
console.log(`num is array : ${one}\n`);

const num2 = 'priyesh';
const two = Array.isArray(num2)
console.log(`num2 is array : ${two}\n`);

const num3 = 2345;
const three = Array.isArray(num3)
console.log(`num3 is array : ${three}\n`);

const num4 = {array1:[345,45],array2:[345,35,]}
const fourth = Array.isArray(num4)
console.log(`num4 is array : ${fourth}\n`);

const num5 =[0]
const fifth= Array.isArray(num5)
console.log(`num5 is array : ${fifth}`);