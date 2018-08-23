'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setupTest = setupTest;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ObjectId = _mongoose2.default.Types.ObjectId;


process.env.NODE_ENV = 'test';

var config = {
  db: {
    test: 'xxx'
  },
  connection: null
};

function connect() {
  return new Promise(function (resolve, reject) {
    if (config.connection) {
      return resolve();
    }

    var mongoUri = 'xxx';

    _mongoose2.default.Promise = Promise;

    var options = {
      server: {
        auto_reconnect: true,
        reconnectTries: Number.MAX_VALUE,
        reconnectInterval: 1000
      },
      useNewUrlParser: true
    };

    _mongoose2.default.connect(mongoUri, options);

    config.connection = _mongoose2.default.connection;

    config.connection.once('open', resolve).on('error', function (e) {
      if (e.message.code === 'ETIMEDOUT') {
        console.log(e);

        _mongoose2.default.connect(mongoUri, options);
      }

      console.log(e);
      reject(e);
    });
  });
}

function clearDatabase() {
  return new Promise(function (resolve) {
    var cont = 0;
    var max = Object.keys(_mongoose2.default.connection.collections).length;
    for (var i in _mongoose2.default.connection.collections) {
      _mongoose2.default.connection.collections[i].remove(function () {
        cont++;
        if (cont >= max) {
          resolve();
        }
      });
    }
  });
}

function setupTest() {
  connect();
  //await clearDatabase();
}