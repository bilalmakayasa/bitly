const prime = require('../src/05')

test('2 is a prime number', () => {
    expect(prime(2)).toBe(true)
})
test('6 is not a prime number', () => {
    expect(prime(6)).toBeFalsy()
}) 