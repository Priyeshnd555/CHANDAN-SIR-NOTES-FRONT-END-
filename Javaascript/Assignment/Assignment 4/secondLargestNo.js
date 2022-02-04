
 // Bubble Sort 
// Normal Function
var arr = [ 65,5,4,45,121,35,345,3453,2,1,565,];
var temp;
 var n = arr.length;

 function bubbleSort(arr,n){

     for(var i =0,j=0; i<n;i++)
     {
         for(var j=0;j<n;j++){
             if(arr[j]>arr[j+1]){
                temp = arr[j]
                arr[j]= arr[j+1]
                arr[j+1]=temp
             }
         }
     }
 }

 bubbleSort(arr,n);

 console.log(arr +" Normal Function");
 var second = arr.length-2;
 console.log(arr[second] +'   is the second largest number');
console.log('\n');
 //Anonymous Function
 var arr = [ 65,5,4,45,121,35,];
 var temp;
  var n = arr.length;
 
  var bubbleSort=function (arr,n){
 
      for(var i =0,j=0; i<n;i++)
      {
          for(var j=0;j<n;j++){
              if(arr[j]>arr[j+1]){
                 temp = arr[j]
                 arr[j]= arr[j+1]
                 arr[j+1]=temp
              }
          }
      }
  }
 
  bubbleSort(arr,n);
 
  console.log(arr +' Anonymous Function');
  var second = arr.length-2;
  console.log(arr[second] +'  is the second largest number');
  console.log('\n');

  ////Self - invoking Function
   //Anonymous Function
 var arr = [ 65,5,4,45,121,35,234,235,2,1,];
 var temp;
  var n = arr.length;
 
  (function (arr,n){
 
      for(var i =0,j=0; i<n;i++)
      {
          for(var j=0;j<n;j++){
              if(arr[j]>arr[j+1]){
                 temp = arr[j]
                 arr[j]= arr[j+1]
                 arr[j+1]=temp
              }
          }
      }
  }(arr,n));
 
  console.log(arr +' Self Invoking Function');
  var second = arr.length-2;
  console.log(arr[second] +' is the second largest number');

  // Arrow Function 
  console.log('\n');

// thers is an error 

   //Anonymous Function
 var Arrow = [ 65,5,4,45,121,35,345,32,1,7437,34,];
 var temp;
  var n = Arrow.length;
 
  var bubbleSortArrow= (Arrow,n)=>{
 
      for(var i =0,j=0; i<n;i++)
      {
          for(var j=0;j<n;j++){
              if(Arrow[j]>Arrow[j+1]){
                 temp = Arrow[j];
                 Arrow[j]= Arrow[j+1];
                 Arrow[j+1]=temp;
              }
          }
      }
  }
 
  bubbleSortArrow(Arrow,n);
  console.log(Arrow +' Arrow  Function');
  var second = Arrow.length-2;
  console.log(Arrow[second] +' is the second largest number');