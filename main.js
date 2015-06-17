(function () {
    var Promise = require('bluebird');

    module.exports.add = function (x, y) {
        return x + y
    };

    module.exports.asyncAdd = function (x, y) {
        return Promise.resolve(x + y);
    };
}());
