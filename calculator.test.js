const { calculator } = require('./index.js');

describe('The operations', () => {
  test('10 + 131 is', () => {
    expect(calculator.add(10, 131)).toBe(141);
  })
  test('131 - 10 is', () => {
    expect(calculator.subtract(131, 10)).toBe(121);
  })
  test('130 / 10 is', () => {
    expect(calculator.divide(130, 10)).toBe(13);
  })
  test('10 * 131 is', () => {
    expect(calculator.multiply(10, 131)).toBe(1310);
  })
})