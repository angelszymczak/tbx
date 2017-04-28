'use strict';
var solution = require('../lib/script'),
    chai = require('chai'),
    should = chai.should();

describe('FizzBuzz Test', () => {
  describe('# input:[] ', () => {
    it('return empty array', (done) => {
      var res = solution([]);
      res.should.be.an('array');
      res.should.be.empty;
      done();
    });
  });

  describe('# input:[1,2,4,7,8] ', () => {
    it('return empty array', (done) => {
      var res = solution([1,2,4,7,8]);
      res.should.be.an('array');
      res.should.be.empty;
      done();
    });
  });

  describe('# input:[1,13,51] ', () => {
    it('return [Fizz, FizzBuzz] array', (done) => {
      var res = solution([1,13,51]);
      res.should.be.an('array');
      res.should.not.be.empty;
      res[0].should.be.equal('Fizz');
      res[1].should.be.equal('FizzBuzz');
      done();
    });
  });

  describe('# input:[0, 1, 3, 5, 100, 15, 30, -552] ', () => {
    it('return [Fizz, Buzz, Buzz, FizzBuzz, FizzBuzz, FizzBuzz] array', (done) => {
      var res = solution([0, 1, 3, 5, 100, 15, 30, -552]);
      res.should.be.an('array');
      res.should.not.be.empty;
      res[0].should.be.equal('Fizz');
      res[1].should.be.equal('Buzz');
      res[2].should.be.equal('Buzz');
      res[3].should.be.equal('FizzBuzz');
      res[4].should.be.equal('FizzBuzz');
      res[5].should.be.equal('FizzBuzz');
      done();
    });
  });
});
