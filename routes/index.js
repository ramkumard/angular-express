var express = require('express');
var router = express.Router();
var controllers = require("../controller/NavController");

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Angular Demo w/ Express' });
});

module.exports = router;
