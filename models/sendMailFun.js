



var nodemailer = require('nodemailer');


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
        return  console.log(error);
        } else {
          return  console.log('Email sent: ' + info.response);
        }
      });
}

module.exports = {
    mailsender:mailsender
  };

