



var nodemailer = require('nodemailer');
const module = require('./module');

const mailsender = async (emailTo, bankEmail, subject, message) => { 
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: bankEmail,
          pass: process.env.EMAIL_PASSWORD
        }
      });
      
      var mailOptions = {
        from: bankEmail,
        to: emailTo,
        subject: subject,
        text: message
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}

module.exports = {
    mailsender:mailsender
  };

