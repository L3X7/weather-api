'use strict';
var city = require('../controllers/city.controller');
module.exports = function (app) {
    app.route('/city/migrate').get(city.migrateToDb);
    app.route('/city/get-cities').get(city.getCities);
    app.route('/city/get-city-by-id').get(city.getCityById);
    app.route('/city/get-city-by-name').get(city.getCityByName);
}