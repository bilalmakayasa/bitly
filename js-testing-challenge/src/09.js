function simetrical(num) {

    if (num.toString().length % 2 == 0) {
        let numArray = num.toString().split('')
        const cut = numArray.splice(0, (num.toString().length / 2))
        const reversed = numArray.reverse()

        if (cut.join('') === reversed.join('')) {
            return true
        } else {
            return false
        }
    } else if (num % 2 != 0) {


        const numString = num.toString()
        const stringNum = numString.length
        const tengah = (stringNum + 1) / 2
        const belakang = numString.substring(tengah).split('').reverse().join('')

        const depan = numString.split('').splice(0, tengah - 1).join('')

        if (depan === belakang) {
            return true
        } else {
            false
        }
    }
}
module.exports = simetrical;
// console.log(simetrical(12343321))

// function tes(a) {

//     const b = a.splice(0, (a.length / 2))
//     const c = a.reverse()

//     if (b.join('') === c.join('')) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(tes([1, 2, 3, 4, 4, 3, 2, 1]))

// const a = 12345654321
// const aString = a.toString()
// const stringNum = aString.length
// const tengah = (stringNum + 1) / 2
// const belakang = aString.substring(tengah).split('').reverse().join('')
// console.log(belakang);
// const depan = aString.split('').splice(0, tengah - 1).join('')
// console.log(depan);