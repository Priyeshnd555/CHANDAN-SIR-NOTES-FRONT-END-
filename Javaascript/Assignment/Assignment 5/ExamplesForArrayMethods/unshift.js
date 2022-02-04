const num = [23,235,345,23,];

console.log(`orginal array [${num}]`);

const first =  num.unshift(34,4);
console.log(`after first unshift array num : [${first}] , arraylength : ${first}\n`);

const second =  num.unshift(65);
console.log(`after second unshift array num : [${second}] , arraylength : ${second}\n`);

const third =  num.unshift(0);
console.log(`after third unshift array num : [${third}] , arraylength : ${third}\n`);

const fourth =  num.unshift();
console.log(`after fourth unshift array num : [${fourth}] , arraylength : ${fourth}\n`);

const fifth =  num.unshift(345);
console.log(`after fifth unshift array num : [${fifth}] , arraylength : ${fifth}\n`);

console.log(`array after calling unshift() is : [${num}]`);