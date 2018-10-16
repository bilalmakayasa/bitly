const arrayMirroring = require('../src/08')

test('[1,2,3] will become [1,2,3,3,2,1]', () => {
    expect(arrayMirroring([1, 2, 3])).toEqual([1, 2, 3, 3, 2, 1])
})

test('[4,5,6] will not become [4,5,6,4,5,6]', () => {
    expect(arrayMirroring([4, 5, 6])).not.toBe([4, 5, 6, 4, 5, 6])
})