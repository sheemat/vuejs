var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'txcloudsys@gmail.com',
    pass: 'Annamma123@'
  }
});

var mailOptions = {
  from: 'txcloudsys@gmail.com',
  to: 'mathew.roy@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});