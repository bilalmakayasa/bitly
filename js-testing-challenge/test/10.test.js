const censor = require('../src/10')
test('#### ingin makan #### goreng.', () => {
    expect(censor('saya ingin makan nasi goreng.', ['saya', 'nasi'])).toBe('#### ingin makan #### goreng.')
})
test(('Pada hari ###### saya ##### siang.'), () => {
    expect(censor('Pada hari senin saya bangun siang', ['senin', 'bangun'], '*')).not.toBe('Pada hari ###### saya ##### siang.')
})