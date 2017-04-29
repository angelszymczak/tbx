'use strict';

module.exports = (app) => {
  var stock = require('../controllers/stockController');
  var express = require('express');
  var api = express.Router();
  app.use('/api', api);
  api.route('/stocks')
    .get(stock.index)
    .post(stock.create);
  api.route('/stocks/:id')
     .get(stock.show)
     .put(stock.update)
     .delete(stock.destroy);
}
