// module.exports = {
//   sum: function(num1, num2) {
//     return num1 + num2;
//   },
//
//   sub: function(num1, num2) {
//     return num1 - num2;
//   },
//
//   div: function(a, b) {
//     return (b === 0) ? 'It is not possible divide by 0' : a / b;
//   },
//   mult: function(a, b) {
//     return a * b;
//   },
//
// }

// the new way
// const sum = (num1, num2) => num1 + num2;
// const sub = (num1, num2) => num1 - num2;
// const mult = (num1, num2) => num1 * num2;
// const div = (num1, num2) => (num2 === 0) ? 'It is not possible divide by 0': num1 / num2;
//
// export { sum, sub, mult, div };

const FizzBuzz = (num) => {
  if (num === 0) return num;
  if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
  if (num % 3 === 0) return 'Fizz';
  if (num % 5 === 0) return 'Buzz';

  return num;
};


export default FizzBuzz;
