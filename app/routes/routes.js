const express = require('express'),
    router = express.Router();

require('./city.route')(router);

module.exports = router;