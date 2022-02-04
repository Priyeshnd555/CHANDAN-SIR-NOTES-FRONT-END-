

var age = 3;
var data = age>18 ? 'adult ': (age<5) ? 'child':"minor";
console.log(data);

var data = '12';
var num = 12 ;

if (data===num){
    console.log("Equal");
}
else{
    console.log("not equal");
}

var percentage = 70 ;

var results = 
(percentage>=70)?'distinction':
(percentage>=35)?'pass':'fail';

console.log(results);

var results =(percentage>=35)? (percentage>=70?'distinction':'pass'):'fail';

console.log(results);


 var d = null;

console.log(typeof d);

 (typeof a ==='number' )?console.log("number"):console.log('Not a number');
 

 var a;
if (typeof a === "object")
{ 
    console.log( "null")
}
else {
    console.log( "undefined")
}