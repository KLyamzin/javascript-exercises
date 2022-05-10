const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  let summ = array.reduce((a, b) => a + b, 0)
  return summ;
};

const multiply = function (array) {
  let summ = array.reduce((a, b) => a * b)
  return summ;
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (a) {
  let b = 1;
  if (a == 0 || a == 1) return 1;
  else return a * factorial(a - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
