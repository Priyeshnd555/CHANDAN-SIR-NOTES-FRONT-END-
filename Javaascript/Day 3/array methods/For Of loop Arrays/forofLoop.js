
// study the below program clearly 

var Fruits = [ "apple", "banana", "orange",];
var allfruits='';
var count =0;

for (var fruit of Fruits){

        count++;
        allfruits += fruit;

        if(( count!=0)&&(count!=Fruits.length))
        {
            allfruits+='-';
        } 
      
};

console.log(allfruits);