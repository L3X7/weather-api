const express = require('express'),
    app = express(),
    port = process.env.PORT || 8080;

const mongoose = require('mongoose');

const bodyParse = require('body-parser');
require('./app/models/city.model');
const api = require('./app/routes/routes');

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost:27017/weatherdb', { useNewUrlParser: true });

app.use('/api', api);

app.listen(port, () => {
    console.log(`${port}`);
})