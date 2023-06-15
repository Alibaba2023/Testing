function sum(a, b) {
  return a + b;
}

function stringLength(srting) {
  return srting.length;
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  divide(a, b) {
    return a / b;
  },
  multiply(a, b) {
    return a * b;
  }
};

module.exports = { sum, stringLength, reverseString, calculator };