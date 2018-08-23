'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _graphql = require('./src/graphql');

var _graphql2 = _interopRequireDefault(_graphql);

var _users = require('./src/models/users');

var _users2 = _interopRequireDefault(_users);

var _createToken = require('./src/resolvers/createToken');

var _verifyToken = require('./src/resolvers/verifyToken');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var PORT = process.env.PORT || 3007;
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

app.post('/user/create', function (req, res) {
    var user = req.body;
    _users2.default.create(user).then(function (user) {
        return res.status(201).json({ message: 'Usuario Creado', id: user._id });
    }).catch(function (err) {
        console.log(err);
        return res.status(400).json(err);
    });
});

app.post('/login', function (req, res) {
    var token = (0, _createToken.createToken)(req.body.username, req.body.password).then(function (token) {
        res.status(201).json({ token: token });
    }).catch(function () {
        res.status(403).json({ message: 'Login Failed :(' });
    });
});

app.use('/graphql', function (req, res, next) {
    var token = req.headers['authorization'];
    try {
        req.user = (0, _verifyToken.verifyToken)(token);
        next();
    } catch (err) {
        res.status(401).json({ message: err.message });
    }
});

app.use('/graphql', (0, _expressGraphql2.default)(function (req, res) {
    return {
        schema: _graphql2.default,
        graphiql: true,
        pretty: true,
        context: {
            user: req.user
        }
    };
}));

app.listen(PORT, function () {
    console.log("server on" + PORT);
});