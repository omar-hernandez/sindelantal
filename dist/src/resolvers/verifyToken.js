'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.verifyToken = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _users = require('../models/users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var secret = 'ejemplosindelantal33';
var tokenPrefix = 'JWT';

var verifyToken = exports.verifyToken = function verifyToken(token) {
    var _token$split = token.split(' '),
        _token$split2 = _slicedToArray(_token$split, 2),
        prefix = _token$split2[0],
        receivedToken = _token$split2[1];

    var user = null;

    if (!receivedToken) {
        throw new Error('No Token');
    }
    if (prefix != tokenPrefix) {
        throw new Error('Header Invalido');
    }

    _jsonwebtoken2.default.verify(receivedToken, secret, function (err, payload) {
        if (err) throw new Error('Token inválido');
        console.log(payload);
        user = _users2.default.findById(payload.id).exec();
    });

    if (!user) throw new Error('Usuario no existe');
    return user;
};