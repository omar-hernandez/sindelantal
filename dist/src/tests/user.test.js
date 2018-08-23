'use strict';

var _graphql = require('graphql');

var _helpers = require('./helpers');

var _graphql2 = require('../graphql');

var _graphql3 = _interopRequireDefault(_graphql2);

var _users = require('../models/users');

var _users2 = _interopRequireDefault(_users);

var _createToken = require('../resolvers/createToken');

var _createToken2 = _interopRequireDefault(_createToken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Prueba de User', async function () {

    beforeAll(async function () {
        return await (0, _helpers.setupTest)();
    });
    it('Probando query sin token deberia ser null', async function () {
        //language=GraphQL
        var query = '\n        query {\n            me{\n                _id\n                 nombre\n                username\n            }\n        }\n        ';
        var result = await (0, _graphql.graphql)(_graphql3.default, query, {}, {});
        var data = result.data;

        expect(data.me).toBe(null);
    });

    it('Probando query de me que deberia ser un usuario', async function () {
        console.log('Iniciando el test 2');
        //language=GraphQL
        var query = '\n      \n        query{\n            me{\n                _id,\n                nombre\n            }\n        }\n    \n    ';
        console.log('Paso const query');

        var user = new _users2.default({
            "nombre": "Juanito 2",
            "apellidos": "Perex 2",
            "correo": "dagorik4@gmai.com",
            "fecha_nacimiento": "1994-04-12",
            "password": "elpassword2",
            "username": "asdads",
            "genero": "M",
            "pais": "MX",
            "ubicacion": "EN MI CASITA",
            "rol": "USER"
        });
        var newUser = await user.save();
        var context = { user: newUser };
        var result = await (0, _graphql.graphql)(_graphql3.default, query, {}, context);
        var data = result.data;

        expect(data.me._id).toBe(newUser._id.toString());
    });
});

it('Suma de 2 mas 2', function () {
    expect(2 + 2).toBe(4);
});