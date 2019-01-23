'use strict';
var mongoose = require('mongoose'),
    City = mongoose.model('City');

exports.getCities = function (req, res) {
    City.find()
        .exec(function (err, city) {
            if (err) {
                res.status(500).send({
                    status: 500,
                    message: 'Error in server'
                });
            } else {
                res.json(city);
            }
        });
}

exports.getCityById = function (req, res) {
    City.find({ id: req.query.id })
        .exec(function (err, city) {
            if (err) {
                res.status(500).send({
                    status: 500,
                    message: 'Error in server'
                });
            } else {
                res.json(city);
            }
        });
}

exports.getCityByName = function (req, res) {
    City.find({ name: req.query.name })
        .exec(function (err, city) {
            if (err) {
                res.status(500).send({
                    status: 500,
                    message: 'Error in server'
                });
            } else {
                res.json(city);
            }
        });
}