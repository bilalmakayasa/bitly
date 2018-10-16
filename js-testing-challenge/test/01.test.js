const charLength = require('../src/01')

test('aku charLength is equal to 3', () => {
    expect(charLength('aku')).toBe(3)
})

test('mama charLength is not equal to 5', () => {
    expect(charLength('mama')).not.toBe(5)
})