'use strict';
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var stockSchema = new Schema({
  productName: { type: String, required: 'Kindly enter the product name' },
  count:       { type: Number, min: [0, 'La cantidad no puede ser menor que 0'] },
  createdAt:   { type: Date, default: Date.now }
});

module.exports = mongoose.model('Stocks', stockSchema);
