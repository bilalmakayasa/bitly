const findByUsername = require('../src/11')

test(`'id: 3, username: 'johndoe' , name: 'John Doe'`, () => {
    expect(findByUsername('johndoe')).toEqual({ id: 3, username: 'johndoe', name: 'John Doe' })
})
test(`'id: 1, username: 'mul14' , name: 'Mulia'`, () => {
    expect(findByUsername('durjaka')).not.toBe({ id: 1, username: 'mul14', name: 'Mulia' })
})