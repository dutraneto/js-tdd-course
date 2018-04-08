import { expect } from 'chai';
import { sum, sub, mult, div } from '../src/main.js';
// var expect = require('chai').expect;
// var calc = require('../src/main.js');

describe('Calc', () => {

  // smoke tests
  describe('Smoke tests', () => {

    it('should exist the method `sum`', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a.arguments;
    });

    it('should exist the method `sub`', () => {
      expect(sub).to.exist;
      expect(sub).to.be.a.arguments;
    });

    it('should exist the method `mult`', () => {
      expect(mult).to.exist;
      expect(mult).to.be.a.arguments;
    });

    it('should exist the method `div`', () => {
      expect(div).to.exist;
      expect(div).to.be.a.arguments;
    });

  });

  describe('Sum', () => {
    it('should return 5 when `sum(2,3)`', () => {
      expect(sum(2,3)).to.be.equal(5);
    });
  });

  describe('Sub', () => {
    it('should return 2 when `sub(4,2)` and negative when `sub(2,3)`', () => {
      expect(sub(4,2)).to.be.equal(2);
      expect(sub(2,3)).to.be.equal(-1);
    });
  });

  describe('Mult', () => {
    it('should return 20 when `mult(4,5)`', () => {
      expect(mult(4,5)).to.be.equal(20);
    });
  });

  describe('Div', () => {
    it('should return 6 when `div(12,2)`', () => {
      expect(div(12,2)).to.be.equal(6);
    });

    it('should return `it is not possible devide by zero (0)`', () => {
      expect(div(4,0)).to.be.equal('It is not possible divide by 0');
    });
  });

});
