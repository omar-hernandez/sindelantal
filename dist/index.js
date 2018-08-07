'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var PORT = process.env.PORT || 3003;
var mongoURI = process.env.MONGODB_URI || "mongodb://principalnegra:cintanegr4@ds113942.mlab.com:13942/sindelantal";

_mongoose2.default.connect(mongoURI, { useNewUrlParser: true });
var db = _mongoose2.default.connection;
db.on('error', function () {
    return console.log('Error al conectar a la BD');
}).once('open', function () {
    return console.log('Conectado a la BD');
});

app.use(_bodyParser2.default.json());
app.use((0, _cors2.default)());

app.get('/', function (req, res) {
    res.send('Server on sindelantal');
});

app.listen(PORT, function () {
    console.log("server on" + PORT);
});

// app.listen(3003, ()=> console.log('server on 3003'));