// Задание №13 - Функциональные выражения
const addFn = (a, b) => a + b;
const subtractFn = (a, b) => a - b;
const multiplyFn = (a, b) => a * b;
const deleteFn = (a, b) => a / b;

function calculate(a, b, cb) {
  return cb(a, b);
}

const operations = {
  add: addFn,
  subtract: subtractFn,
  multiply: multiplyFn,
  delete: deleteFn
};

const selectedOperation = "multiply";

console.log(calculate(6, 3, operations[selectedOperation])); // 18