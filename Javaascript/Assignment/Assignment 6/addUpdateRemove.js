// addUpdateRemove
 arr = [ 23,5,4,46,23,];

add(arr);


let updatearr = [23,5,4,46,23] ;
update(updatearr);

let removeArr = [23,5,4,46,23]
remove(removeArr);

function add(arr) {
    
    const adds = arr.splice(0,0,333);
    return adds;
};



console.log(`after adding arr : `,arr)
console.log('------------------------------------');


function update(updatearr) {
    
    return updatearr.splice(0,1,222)
};

console.log(`after updating arr : `,updatearr)
console.log('----------------------------------------------');

function remove(removeArr) {
    
    return removeArr.splice(0,3)
};

console.log(`after adding arr : `,removeArr)


