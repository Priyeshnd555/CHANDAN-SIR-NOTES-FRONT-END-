
 // Bubble Sort 
// Normal Function
 var arr = [ 65,5,4,45,121,35,345,3453,];
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

  ////Self - invoking Function
   //Anonymous Function
 var arr = [ 65,5,4,45,121,35,];
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


  // Arrow Function 

   //Anonymous Function
 var arr = [ 65,5,4,45,121,35,];
 var temp;
  var n = arr.length;
 
  var bubbleSort= (arr,n)=>{
 
      for(var i =0,j=0; i<n;i++)
      {
          for(var j=0;j<n;j++){
              if(arr[j]>arr[j+1]){
                 temp = arr[j];
                 arr[j]= arr[j+1];
                 arr[j+1]=temp;
              }
          }
      }
  }
 
  bubbleSort(arr,n);
 
  console.log(arr +' Arrow  Function');
