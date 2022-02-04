

var height = 1.86;
var weight = 94;

var bmi = Math.round( (weight)/(height*height));

console.log(bmi);



(bmi > 0 && bmi < 18.5 )? console.log('you are too thin')
: (bmi>18.5 && bmi <25) ? console.log('you are normal')
: bmi >25 ? console.log('you are overweight')
: console.log('Enter Valid data');