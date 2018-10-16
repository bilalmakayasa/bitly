function roman(romawi) {
    let result = 0
    let indeks = romawi.charAt()
    for (let i = 0; i < romawi.length; i++) {
        if (romawi.charAt(i) === 'I') {
            result += 1
        }
        if (romawi.charAt(i) === 'V') {
            result += 5
        }
        if (romawi.charAt(i) === 'X') {
            result += 10
        }
        if (romawi.charAt(i) === 'L') {
            result += 50
        }
        if (romawi.charAt(i) === 'C') {
            result += 100
        }
        if (romawi.charAt(i) === 'D') {
            result += 500
        }
        if (romawi.charAt(i) === 'M') {
            result += 1000
        }
    }
    return result
}
module.exports = roman