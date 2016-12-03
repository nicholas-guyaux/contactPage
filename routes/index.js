var express = require('express');
var router = express.Router();
var myEmail = 'nicholas.guyaux@gmail.com';
var nodemailer = require('nodemailer');

//create reusable transporter object usingthe default smtp
var transporter = nodemailer.createTransport('smtps://nicholas.guyaux@gmail.com:pass@smtp.gmail.com');

// Get /
router.get('/', function(req, res, next) {
  return res.render('index', { message:""});
});

router.get('/email', function (req, res, next) {
  //setup email data with unicode symbols
  console.log(req.body.message)
  var mailOptions = {
    from: req.body.email,
    to: myEmail,
    subject: req.body.subject,
    email: req.body.email,
    text: req.body.message
  };
  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      return res.render('index', {message: "error"});
      return console.log(error);
    }
    return res.render('index', { message: "Success"});
  });

})

module.exports = router;
