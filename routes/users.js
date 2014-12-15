var express = require('express');
var router = express.Router();
var controllers = require("../controller/NavController");

/* GET nav bar. */
router.get('/api/polls',controllers.index);

module.exports = router;
