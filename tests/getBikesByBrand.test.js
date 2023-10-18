const { getBikesByBrand } = require('../src/getBikesByBrand')

test('The function sayHello should return a object', () => {
    const result = getBikesByBrand('kawasaki');
    expect(typeof result).toBe('object')
})