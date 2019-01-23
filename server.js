const express = require('express'),
    app = express(),
    port = process.PORT || 8080;

const mongoose = require('mongoose');

const bodyParse = require('body-parser');
const fs = require('fs');

const api = require('./app/routes/routes');

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));

app.get('/api/cities', (req, res) => {
    var fileRead = fs.readFile('data/city.list.min.json', 'utf8', function (err, data) {
        if (err) {
            res.status(500).send({
                message: 'Error server'
            });
        }
        var objResult = JSON.parse(data);
        res.json(objResult);
    });
});

app.listen(port, () => {
    console.log(`${port}`);
})