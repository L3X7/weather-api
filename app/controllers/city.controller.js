'use strict';
var mongoose = require('mongoose'),
    City = mongoose.model('City'),
    fs = require('fs');
const currentPath = process.cwd();

exports.migrateToDb = function (req, res) {
    try {
        fs.readFile(currentPath.concat('/data/city.list.min.json'), 'utf8', function (err, data) {
            if (err) {
                res.status(500).send({
                    status: 500,
                    message: 'Error in process'
                });
            } else {
                var dataResult = JSON.parse(data);
                var dataResultFilter = dataResult.cities.filter(function (item) {
                    return (item.country !== null && item.country !== '') && (item.name !== null && item.name !== '')
                        && (item.country !== null && item.country !== '')
                });
                City.insertMany(dataResultFilter, function (errSaved, docs) {
                    if (errSaved) {
                        res.status(500).send({
                            status: 500,
                            message: 'Error in process',
                            error: errSaved
                        });
                    }
                    else {
                        res.status(200).send({
                            status: 200,
                            message: 'Cities saved'
                        })
                    }
                });
            }
        })
    } catch (error) {
        res.status(500).send({
            status: 500,
            message: 'Error in process'
        });
    }
}

exports.getCities = function (req, res) {
    City.find({}, function (err, data) {
        if (err) {
            res.status(500).send({
                status: 500,
                message: 'Error'
            })
        }
        else {
            res.status(200).send({
                status: 200,
                message: 'Success',
                result: data
            })
        }
    });
}

exports.getCityById = function (req, res) {
    City.find({ id: { '$regex': req.query.id, '$options': 'i' } }, function (err, data) {
        if (err) {
            res.status(500).send({
                status: 500,
                message: 'Error'
            })
        }
        else {
            res.status(200).send({
                status: 200,
                message: 'Success',
                result: data
            })
        }
    });
}

exports.getCityByName = function (req, res) {
    console.log(req.query);
    City.find({ name: { '$regex': req.query.name, '$options': 'i' } }, function (err, data) {
        if (err) {
            res.status(500).send({
                status: 500,
                message: 'Error',
                error: req
            })
        }
        else {
            res.status(200).send({
                status: 200,
                message: 'Success',
                result: data
            })
        }
    });

}