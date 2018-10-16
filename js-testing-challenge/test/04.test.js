const leapYear = require('../src/04')

test('2016 is a leapYear', () => {
    expect(leapYear(2016)).toBe(true)
})
test('2018 is not a leapYear', () => {
    expect(leapYear(2018)).not.toBe(false)
})