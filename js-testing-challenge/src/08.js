function arrayMirroring([...array]) {
    for (i = array.length - 1; i >= 0; i--) {
        array.push(array[i])
    }
    return array
}
module.exports = arrayMirroring;

// const array = [1,2,3,4,5,6,7,8]
// for(i=array.length - 1 ; i >= 0 ; i--){
//     array.push(array[i])
// }
// console.log(array)