'use strict';

var app = require('../server'),
    chai = require('chai'),
    chaiHttp = require('chai-http'),
    should = chai.should(),
    request = require('supertest'),
    expect = chai.expect,
    mongoose = require('mongoose'),
    Stock = mongoose.model('Stocks');
chai.use(chaiHttp);

describe('API Tests', () => {
  beforeEach((done) => {
    Stock.remove({}, (err) => {
      done();
    });
  });

  describe('# GET /api/stocks - Get all stocks', () => {
    it('should get all stocks', (done) => {
      chai.request(app) .get('/api/stocks') .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('array');
        res.body.should.be.empty;
        done();
      });
    });
  });

  describe('# POST /api/stock - Create stock ', () => {
    it('should create a stock', (done) => {
      var stock = { productName: 'integration test', count: 1500 };
      chai.request(app) .post('/api/stocks') .send(stock) .end((err, res) => {
        res.should.have.status(200);
        res.body.productName.should.equal(stock.productName);
        res.body.count.should.equal(stock.count);
        done();
      });
    });
  });

  describe('# GET /api/stock/:id - Get a stock by id', () => {
    var new_stock = new Stock({productName: 'Testing Product', count: 7000});

    it('should get a stock', (done) => {
      new_stock.save();
      chai.request(app) .get('/api/stocks/' + new_stock._id) .end((err, res) => {
        res.should.have.status(200);
        res.body.productName.should.equal(new_stock.productName);
        res.body.count.should.equal(new_stock.count);
        done();
      });
    });
  });

  describe('# PUT /api/stock/:id - Update a stock by id', () => {
    var new_stock = new Stock({productName: 'Testing Product', count: 7000});

    it('should get a stock', (done) => {
      new_stock.save();
      var updated_stock = {productName: 'Updated Stock', count: 9999 };
      chai.request(app) .put('/api/stocks/' + new_stock._id) .send(updated_stock) .end((err, res) => {
        res.should.have.status(200);
        res.body.productName.should.equal(updated_stock.productName);
        res.body.count.should.equal(updated_stock.count);
        done();
      });
    });
  });

  describe('# DELETE /api/stock/:id - Delete a stock by id', () => {
    var new_stock = new Stock({productName: 'Testing Product', count: 7000});

    it('should get a stock', (done) => {
      new_stock.save();
      chai.request(app) .delete('/api/stocks/' + new_stock._id) .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('message').that.equal('Stock successfully deleted');
        done();
      });
    });
  });
});
