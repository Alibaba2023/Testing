const { stringLength } = require('./index.js');

test('The length of string "Ali Baba Hussaini" is: ', () => {
  expect(stringLength('Ali Baba Hussaini')).toBe(17);
});