// import { expect } from 'chai';
// import { sum, sub, mult, div } from '../src/main.js';
// // var expect = require('chai').expect;
// // var calc = require('../src/main.js');
//
// describe('Calc', () => {
//
//   // smoke tests
//   describe('Smoke tests', () => {
//
//     it('should exist the method `sum`', () => {
//       expect(sum).to.exist;
//       expect(sum).to.be.a.arguments;
//     });
//
//     it('should exist the method `sub`', () => {
//       expect(sub).to.exist;
//       expect(sub).to.be.a.arguments;
//     });
//
//     it('should exist the method `mult`', () => {
//       expect(mult).to.exist;
//       expect(mult).to.be.a.arguments;
//     });
//
//     it('should exist the method `div`', () => {
//       expect(div).to.exist;
//       expect(div).to.be.a.arguments;
//     });
//
//   });
//
//   describe('Sum', () => {
//     it('should return 5 when `sum(2,3)`', () => {
//       expect(sum(2,3)).to.be.equal(5);
//     });
//   });
//
//   describe('Sub', () => {
//     it('should return 2 when `sub(4,2)` and negative when `sub(2,3)`', () => {
//       expect(sub(4,2)).to.be.equal(2);
//       expect(sub(2,3)).to.be.equal(-1);
//     });
//   });
//
//   describe('Mult', () => {
//     it('should return 20 when `mult(4,5)`', () => {
//       expect(mult(4,5)).to.be.equal(20);
//     });
//   });
//
//   describe('Div', () => {
//     it('should return 6 when `div(12,2)`', () => {
//       expect(div(12,2)).to.be.equal(6);
//     });
//
//     it('should return `it is not possible devide by zero (0)`', () => {
//       expect(div(4,0)).to.be.equal('It is not possible divide by 0');
//     });
//   });
//
// });


/*

Desafio FizzBuzz

Se o nr for divisivel por 3, no lugar do numero escreva 'Fizz'
Se o nr for divisivel por 5, no lugar do numero escreva 'Buzz'
Se o nr for divisivel por 3 e 5, no lugar do numero escreva 'FizzBuzz'
Se nao for multiplo de nada, retorna o numero



*/

import { expect } from 'chai';
import FizzBuzz from '../src/main'

describe('FizzBuzz', () => {

  it('should return `Fizz` when multiple of 3', () => {
    expect(FizzBuzz(3)).to.be.equal('Fizz');
    expect(FizzBuzz(6)).to.be.equal('Fizz');
  });

  it('should return `Buzz` when multiple of 5', () => {
    expect(FizzBuzz(5)).to.be.equal('Buzz');
    expect(FizzBuzz(10)).to.be.equal('Buzz');
  });

  it('should return `FizzBuzz` when multiple of 3 and 5', () => {
    expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
  });

  it('should return `the number` when non-multiple', () => {
    expect(FizzBuzz(17)).to.be.equal(17);
  });

  it('should return `0` number === 0', () => {
    expect(FizzBuzz(0)).to.be.equal(0);
  });
});
