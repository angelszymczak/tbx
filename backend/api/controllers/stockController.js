'use strict';

var mongoose = require('mongoose'),
    Stock = mongoose.model('Stocks');

exports.index = (req, res) => {
  Stock.find({}, (err, stock) => {
    if (err) res.send(err);
    res.json(stock);
  })
}

exports.create = (req, res) => {
  var new_stock = new Stock(req.body);
  new_stock.save((err, stock) => {
    if (err) res.send(err);
    res.json(stock);
  });
};

exports.show = (req, res) => {
  Stock.findById(req.params.id, (err, stock) => {
    if (err) res.send(err);
    res.json(stock);
  });
};

exports.update = (req, res) => {
  Stock.findOneAndUpdate(req.params.id, req.body, {new: true}, (err, stock) => {
    if (err) res.send(err);
    res.json(stock);
  });
};

exports.destroy = (req, res) => {
  Stock.remove({_id: req.params.id}, (err, stock) => {
    if (err) res.send(err);
    res.json({ message: 'Stock successfully deleted' });
  });
};
