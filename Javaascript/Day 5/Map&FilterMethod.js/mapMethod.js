 

 let num = [ 20,30,49,]
 let numbsafterAddingTen = num.map(function (val, index) { 

     val +=val;

     return val ;
     
 })

 console.log(`nums after adding Ten - ${numbsafterAddingTen}`);

 console.log('-------------');

 const numsAfterAddingTenUsingArrow = num.map((val,index)=>{
                                                                return val+10
                                                        })

console.log(`numsAfterAddingTenUsingArrow - ${numsAfterAddingTenUsingArrow}`);

console.log('------------------------------');

const numsAfterAddingTenUsingSingleLIne = num.map((val,index)=>  val+10)

console.log(`numsAfterAddingTenUsingSingleLIne - ${numsAfterAddingTenUsingSingleLIne}`);
