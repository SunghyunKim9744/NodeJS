var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* GET home page. */
router.get('/list', function(req, res, next) {

  var connection = mysql.createConnection({
    host     : 'hi.namoolab.com',
    port     : 9898,
    user     : 'newlecture',
    password : '11111',
    database : 'newlecture'
  });
   
  connection.connect();
   
  connection.query('SELECT * from Notice', function (error, results, fields) {
    if (error) throw error;
    results.forEach(notice => {
      console.log(`작성자 : ${notice.writerId}, 제목 : ${notice.title}`);
  
    });
    res.render("customer/notice/list.ejs",{list:results});

    //console.log('The title is: ', results[0].title);
  });
   
  connection.end();

  

});


module.exports = router;
