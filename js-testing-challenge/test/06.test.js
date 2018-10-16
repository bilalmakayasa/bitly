const repeatString = require('../src/06')

test('Makan! Makan! Makan!', () => {
    expect(repeatString('Makan', 3)).toBe('Makan Makan Makan')
})

test('Makan! Makan! Makan! Makan! Makan!', () => {
    expect(repeatString('Makan', 3)).not.toBe('Makan! Makan! Makan! Makan! Makan!')
})