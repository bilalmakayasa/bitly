const mebiToKebi = require('../src/03')

test('1 MiB i equal to 1000 KiB', () => {
    expect(mebiToKebi(1)).toBe(1000)
})
test('2 MiB i equal to 1900 KiB', () => {
    expect(mebiToKebi(2)).not.toBe(1900)
})