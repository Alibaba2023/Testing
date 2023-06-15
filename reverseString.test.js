const { reverseString } = require('./index.js');

test('The reverse of the string "Ali" is:', () => {
  expect(reverseString('Ali')).toBe('ilA');
})