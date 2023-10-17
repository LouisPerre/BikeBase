// const lib = require('../src/index')
const { sayHello } = require('../src/index')
const { faker } = require('../src/faker')

test('The function sayHello should return a string', () => {
    const result = sayHello();
    expect(typeof result).toBe('string')
    expect(result).toBe('Say Hello')
})

test('The function sayHello should return a string', () => {
    const result = faker();
    expect(typeof result).toBe('string')
    expect(result).toBe('Hello')
})