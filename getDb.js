function getDb(){
    var mysql = require('mysql');
    var connection = mysql.createConnection({
      host     : '127.0.0.1',
      user     : 'root',
      password : 'root',
      database : 'node'
    });
    connection.connect();
    return connection;
}
//注意此处使用 module.exports = 函数名 来暴露函数接口
module.exports = getDb;

