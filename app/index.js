var express = require('express');
var router = express.Router();
var getDb = require('../getDb.js');
var coon = require('../coon.js');
router.get('/', function(req, res) {
    //核心语法检验
    if(!coon.lizhili(req.query)){
        res.json({
            type : 0,
            message : '非法获取'
        });
    }

    var connection = getDb();
    connection.query(
        'insert into test (`name`) values (?);',
        [1],
        function(error, results, fields){
            if(results){
                var obj = {
                    name : "hcoder",
                    version : 1.1
                   };
                res.json(obj);
            }
        }
    );
});

module.exports = router;