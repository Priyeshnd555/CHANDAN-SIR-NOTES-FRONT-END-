const  num = [23,34,235,23,5,23,]
console.log(`original array [${num}]`);


const first=num.shift();
 console.log(`after shift() 1 : [${first}]`);

const second=num.shift();
 console.log(`after shift() 2 : [${second}]`);

const third=num.shift();
 console.log(`after shift() e : [${third}]`);

const fourth=num.shift();
 console.log(`after shift() 4 : [${fourth}]`);

const fifth=num.shift();
 console.log(`after shift() 5 : [${fifth}]`);

 console.log(`Array num after calling shift() [${num}]`);