var express = require('express');
var router = express.Router();

const dbTemplate = require('../../config/DbTemplate');
/* GET home page. */
router.get('/list', function(req, res, next) {

  dbTemplate
  .query('SELECT * FROM Notice')
  .then((list)=>{
    res.json(list);
  });
    //console.log('The title is: ', results[0].title);
 
    //res.render("customer/notice/list.ejs", { list: results });
});

router.get('/:id',function(req,res,next) {
  console.log(req.params.id);
  dbTemplate
  .query(`SELECT * FROM Notice where id=${req.params.id}`)
  .then(list=>list[0])
  .then(notice=>{
    res.json(notice);
  });
});


module.exports = router;
