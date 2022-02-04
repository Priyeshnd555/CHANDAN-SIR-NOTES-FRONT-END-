// Date Object

var todayDate = new Date()
 console.log(`\n today date is : \n ${todayDate}`);


 // futureDate
 var futureDate = new Date( 2022, 0, 03, 12, 30, 45);
 console.log(`\n futureDate is :  \n ${futureDate}`);

// date of Birth 
var dateOfBirth = new Date('Apr 28 1998');
console.log(`\n Date of Birth :: \n ${dateOfBirth}`);

// milliseconds
var findDateUsingMilliSeconds = new Date(86000000)
console.log(`\n Date using milliSeconds:: \n ${findDateUsingMilliSeconds}`);


// date Methods
console.log(`\n Full year : \n ${todayDate.getFullYear()}`);
console.log(`\n Month : \n ${todayDate.getMonth()}`);
console.log(`\n Date : \n ${todayDate.getDate()}`);
console.log(`\n Day : \n ${todayDate.getDay()}`);
console.log(`\n Now : \n ${Date.now()}`);

var months = [ 'january', 'febvery' ,'march', 'april' ,'may' , 'june', 'july', 'august' ,'september','october', 'novermber', 'december',]
var day = [ 'sunday', 'monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
var date = new Date('dec 10 2021');

//printig Day and Months as String of Text

console.log(` \n the date is :\n  ${months[date.getMonth()]} ${day[date.getDay()]} ${date.getFullYear()}`);