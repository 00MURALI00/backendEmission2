var express = require('express');
var router = express.Router();
const executeColabFile = require('../scripts/colab');

router.get('/executeFile', executeColabFile);

module.exports = router;
