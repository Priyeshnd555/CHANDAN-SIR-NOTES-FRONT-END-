const  num = [23,45,34,6,345,234,23,523,5,];
console.log(`the orginal array is [${num}]\n`);

const  one = num.splice(0,3,3,3,3)
console.log(`the array after splice one : [${num}]`);
console.log(`the returned element : [${one}]]\n`);

const  second = num.splice(0,456,6,4,3,6,)
console.log(`the array after splice second : [${num}]`);
console.log(`the returned element : [${second}]\n`);

const  third = num.splice(0,0,0,0,)
console.log(`the array after splice third : [${num}]`);
console.log(`the returned element : [${third}]\n`);

const  fourth = num.splice(1,4,5)
console.log(`the array after splice fourth : [${num}]\n`);
console.log(`the returned element : [${fourth}]`);

const  fifth= num.splice(3,0,6,3,6)
console.log(`the array after splice fifth : [${num}]`);
console.log(`the returned element : [${fifth}]\n`);


console.log(`array after calling splice() on it [${num}]`);
