var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("루트");
  res.redirect("index");
});

router.get('/index', function(req, res, next) {
  console.log("인덱스");
  res.render("index.ejs",{title : 'Express'});
});
module.exports = router;
