
/* checking wheather objcts have index or not  */


var book = {

    title: 'web fundaments',
    price :1200,
};

var books = [ 'web fundamentals', 'javascript', 'java'];

books[0]='python';

books['elements']='.net';  // i can assign like this 

// but for loop will lop consider this since 
// for loop takes only numbered idexes i =1,2,4...


// to print books['elemetns'] can be printed in 
// For in loop because it prints all indexes irrespecitve of type of indexes
// onsider following example

for(var i=0 ;i<books.length;i++){
    console.log(`books[${i} : ${books[i]}]`);
};
console.log('\n    here books[elemetns} is printed ');
for ( var item in books){
    console.log(`books[${item} : ${books[item]}]`);
}