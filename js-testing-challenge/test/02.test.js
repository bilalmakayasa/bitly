const sum = require('../src/02')

test('2 + 2 is equal to 4', () => {
    expect(sum(2, 2)).toBe(4)
})
test('2 + 3 is not equal to 6', () => {
    expect(sum(2, 3)).not.toBe(6)
})