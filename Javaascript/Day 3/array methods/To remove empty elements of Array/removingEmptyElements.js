

var array = [ 'hello', , , 234, 34, 5, 'priyesh'];

// for looop prints empty elemetns

for (var i =0 ; i<array.length;i++){
    console.log(`array[${i} : ${array[i]}`);
}
console.log('\n');

// for in loop does not executes empty elements
for( var index in array){
    console.log(`array[${index} : ${array[index]}`);
}

// you can see that empty values are not printed 
// but empty string '' is printed since it is a value

// only undefined is not printed 