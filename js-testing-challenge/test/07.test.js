const repeatLetters = require('../src//07')

test('HHeelloo WWoorrlldd!!', () => {
    expect(repeatLetters('Hello World!', 2)).toBe('HHeelllloo WWoorrlldd!!')
})

test('HHHeeelllooo WWWooorrrlllddd!!', () => {
    expect(repeatLetters('Hello World!', 4)).not.toBe('HHHeeelllooo WWWooorrrlllddd!!!')
})