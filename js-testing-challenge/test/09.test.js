const simetrical = require('../src/09')
test('string is simetrical Number', () => {
    expect(simetrical('malam')).toBe(true)
})
test('67865 is not simetrical Number', () => {
    expect(simetrical(67865)).not.toBe(false)
})