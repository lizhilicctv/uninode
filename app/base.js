var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.json({
        type : 0,
        message : '非法获取'
    });
});

module.exports = router;