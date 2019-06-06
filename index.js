const express = require("express");
const http = require("http");
const app = express();

//调用公共方法
//var coon = require('./coon.js');

// 利用文件来拆分路由的规模 
var base = require('./app/base');
app.use('/',base);

var index = require('./app/index');
app.use('/index',index);








//所有路由定义完之后，最后做404处理 ,这里做最后处理
app.get('*', function (req, res){
    res.location('/');
});

http.createServer(app).listen(3000);

