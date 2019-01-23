'use strict';
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var CitySchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    coord: {
        lon: {
            type: Number
        },
        lat: {
            type: Number
        }
    }
});
mongoose.model('City', CitySchema);