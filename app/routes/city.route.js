'use strict';
var city = require('../controllers/city.controller');
module.exports = function (app) {
    app.route('/city/get-cities').get();
}