// const { getBikesByBrand } = require('../src/getBikesByBrand')
import getBikesByBrand from "../src/getBikesByBrand";

test('The function getBikesByBrand should return a object', () => {
    const result = getBikesByBrand('kawasaki');
    expect(typeof result).toBe('object')
})