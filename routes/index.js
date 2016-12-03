var express = require('express');
var router = express.Router();
var sendmail = require('sendmail')();
var myEmail = 'nicholas.guyaux@gmail.com';

// GET /
router.get('/', function(req, res, next) {
  return res.render('index',{message: ""});
});

router.get('/email', function (req, res, next) {
  sendmail({
    from: req.body.email,
    to: myEmail,
    subject: req.body.name,
    hmtl: req.body.message,
  }, function(err, reply) {
    if(err){
      return res.render('index', {message: "Error"});
    }else{
      return res.render('index', {message: "Success"});
    }
    console.log(err && err.stack);
    console.dir(reply);
  });
});

module.exports = router;
