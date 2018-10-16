const isIsogram = require('../src/14')

test('true', () => {
    expect(isIsogram('gelas')).toBe(true)
})

test('false', () => {
    expect(isIsogram('makan')).toBeFalsy()
})