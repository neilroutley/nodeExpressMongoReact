var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/createMessage', function(req, res, next) {
  res.render("Hi!");
});

router.get('/getMessage', function(req, res, next) {
	console.log("getMessages!!");
  res.send([
  		{text:"Neil"}
  	]);
});

module.exports = router;
