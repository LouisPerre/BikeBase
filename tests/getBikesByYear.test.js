const { getBikesByYear } = require('../src/getBikesByYear');

describe('getBikesByYear function', () => {
  test('returns an array of bikes with launch year less than the specified year', () => {
    const result = getBikesByYear(2010);
    expect(Array.isArray(result)).toBe(true);
    expect(result.every(bike => bike.year_launched < 2010)).toBe(true);
  });
});
