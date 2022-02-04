const num = [ 3,35,5,2,523,5,25,23,]

console.log(`orginal array is ${num}`);

const one = num.slice(0,0);
console.log(`the returned new arrray after first slice(0,0) : [${one}]\n`);

const second = num.slice(1,2);
console.log(`the returned new arrray after second slice(1,2) : [${second}]\n`);

const third = num.slice(2,3);
console.log(`the returned new arrray after third slice(2,3) : [${third}]\n`);



const fourth = num.slice(4,3);
console.log(`the returned new arrray after first slice(4,3) : [${fourth}]\n`);

const fifth = num.slice(2,1);
console.log(`the returned new arrray after fifth slice(2,1) : [${fifth}]\n`);

console.log(`the array after calling slice() methods on it : [${num}]`);