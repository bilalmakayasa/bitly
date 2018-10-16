function prime(num) {
    if (num === 2 || num === 3 || num === 5 || num === 7) {
        return true
    } else if (num === 1 || num % 2 === 0 || num % 3 === 0 || num % 4 === 0 || num % 5 === 0 || num % 6 === 0 || num % 7 === 0 || num % 8 === 0 || num % 9 === 0 || num % 10 === 0); {
        return false
    }

};

// console.log(prime(6))

module.exports = prime;