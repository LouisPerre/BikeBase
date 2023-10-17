const lib = require('../src/index')

test('The function sayHello should return a string', () => {
    const result = lib.sayHello();
    expect(typeof result).toBe('string')
    expect(result).toBe('Hello')
})