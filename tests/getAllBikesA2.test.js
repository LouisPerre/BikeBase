const { getAllBikesA2 } = require("../src/getAllBikesA2");

test('The function getAllBikesA2 should return an object of bikes with A2 == true', () => {
  const result = getAllBikesA2();
  expect(typeof result).toBe('object');
  Object.values(result).forEach(brandBikes => {
    expect(Array.isArray(brandBikes)).toBe(true);
    expect(brandBikes.every(bike => bike.a2 === true)).toBe(true);
  });
});
