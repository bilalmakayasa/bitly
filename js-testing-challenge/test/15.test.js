const roman = require('../src/15')

test('MMXVIII supposed to be 2018', () => {
    expect(roman('MMXVIII')).toBe(2018)
})

test('VII is not 8', () => {
    expect(roman('VII')).not.toBe(8)
})