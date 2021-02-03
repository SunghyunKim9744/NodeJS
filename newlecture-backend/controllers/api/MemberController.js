var express = require('express');
var router = express.Router();

const dbTemplate = require('../../config/DbTemplate');

router.get('/:uid',function(req,res,next) {
  //console.log(req.params.uid);
  dbTemplate
  .query(`SELECT * FROM Member where uid='${req.params.uid}'`)
  .then(list=>list[0])
  .then(member=>{
    res.json(member);
  });
});


module.exports = router;
