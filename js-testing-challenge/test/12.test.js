const Item = require('../src/12')


test('true', () => {
    expect(Item.findById(5).isOnSale()).toBe(true)
})
test('false', () => {
    expect(Item.findById(1).isOnSale()).toBeFalsy()
})