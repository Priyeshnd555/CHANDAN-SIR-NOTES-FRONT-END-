
console.log('  set timeout  after 5 sec below line is printed\n');
var timeout1 = setTimeout(()=>console.log(' This is a TimeOut1 function '),5000)


var TimeOut2 = setTimeout(()=>console.log(' TimeOut2 this is will not get excuted '),5000)

clearTimeout(TimeOut2)





 