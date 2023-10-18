const { getAllBikes } = require('../src/getAllBikes')

test('The function getAllBikes should return a object', () => {
    const result = getAllBikes();
    expect(typeof result).toBe('object')
})