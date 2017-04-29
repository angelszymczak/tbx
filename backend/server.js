var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Stock = require('./api/models/stockModel'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    cors = require('cors'),
    corsOptions = {
      origin: 'http://localhost:8000',
      optionsSuccessStatus: 200
    },
    config = require('config');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ToolboxStockManager');

if(config.util.getEnv('env') !== 'test') {
    app.use(morgan('combined'));
}

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/stockRoutes');
routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);
console.log('todo list RESTful API server started on: ' + port);

module.exports = app;
