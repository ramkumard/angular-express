var express = require('express');
var router = express.Router();
var controllers = require("../controller/NavController");

/* GET home page. */
router.get('/',controllers.index);


// router.get('/', function(req, res) {
// var request = require("request");
// var resultsObj;
// request.get("http://foofys.styletag.in/api/categories/c1", function (err, res, body) {
//         resultsObj = JSON.parse(body);
//         console.log(resultsObj);
// });
//   res.render('index', { title: resultsObj});
// });

// router.get('/about', function(req, res) {
//     res.render('about', {title:"About Me"});
// });

module.exports = router;
