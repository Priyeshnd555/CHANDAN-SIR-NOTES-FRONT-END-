// reverse a string 
// normal Function 
console.log('\n');

var str = 'priyesh';
var reverse='';
var strArr= str.split("");
console.log('Normal Function');
console.log('original Strig : '+strArr);

function reverseArray(strArr,reverse)
{

    for(var i =strArr.length-1;i>=0;i--)
    {
    reverse+=strArr[i]
    }
    return reverse;
}

var reversestr= reverseArray(strArr,reverse);
var strreverse = reversestr.split("")
console.log('String reverse : '+strreverse);

// Anonymous Function
console.log('\n');

var str = 'priyesh';
var reverse='';
var strArr= str.split("");
console.log('Anonymous Function');
console.log('original Strig : '+strArr);

var reverseArray= function (strArr,reverse)
{

    for(var i =strArr.length-1;i>=0;i--)
    {
    reverse+=strArr[i]
    }
    return reverse;
}

var reversestr= reverseArray(strArr,reverse);
var strreverse = reversestr.split("")
console.log('String reverse : '+strreverse);


// self- invoking function 
console.log('\n');

var str = 'priyesh';
var reverse='';
var strArr= str.split("");
console.log('Self invoking Function');
console.log('original Strig : '+strArr);

(function (strArr,reverse)
{

    for(var i =strArr.length-1;i>=0;i--)
    {
    reverse+=strArr[i]
    }
   

var strreverse = reversestr.split("")
console.log('String reverse : '+strreverse);

}(strArr,reverse));

// Arrow Function
var str = 'priyesh';
var reverse='';
var strArr= str.split("");
console.log('\n');
console.log('Arrow Function');
console.log('original Strig : '+strArr);



var reverseArray=(strArr,reverse)=>
{

    for(var i =strArr.length-1;i>=0;i--)
    {
    reverse+=strArr[i]
    }
    return reverse;
}

var reversestr= reverseArray(strArr,reverse);
var strreverse = reversestr.split("")
console.log('String reverse : '+strreverse);

