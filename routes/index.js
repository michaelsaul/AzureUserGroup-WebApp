var express = require('express');
var router = express.Router();

var os = require("os");
var hostname = os.hostname();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Hello Azure User Group!" , hostname: hostname});
});

module.exports = router;
