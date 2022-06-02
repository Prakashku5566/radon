const express = require('express');
const externalModule = require('../logger/logger')
const date = require('../../src/util/helper')
const string = require('../../src/validator/formatter')
const router = express.Router();


router.get('/test-me', function (req, res) {
    externalModule.log();
    // date.Date();
    // date.month();
    // date.batch();
string.trim();
string.lowercase();
string.uppercase();
    res.send('My first ever api!')
});

module.exports = router;
