var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send('找不到网页!');
});

module.exports = router;