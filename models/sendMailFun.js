
const nodemailer = require("nodemailer");
const {google} = require("googleapis")

const CLIENT_ID = "85845321380-9t05l0n1tl188q1t1s3g9s8vq0bq53qe.apps.googleusercontent.com"
const CLIENT_SECRET ="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"
const REDIRECT_URL="https://developers.google.com/oauthplayground"
const REFRESH_TOKEN ="1//04zOR4CcuThgnCgYIARAAGAQSNwF-L9IrFzVbPdfoSvmCLTSMGSjp2fYjnGe4UYOlpb6QWz40tNLdKGOBXJmwwytaXOiaqP8wa-c"



const oAuth2client = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URL)
 
oAuth2client.setCredentials({refresh_token:REFRESH_TOKEN })

  async function mailsender (emailTo,subject, message)  { 
 
    const accsessToken = await oAuth2client.getAccessToken()

    let transporter = nodemailer.createTransport({
        // service: 'gmail',
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        
        auth: { 
          type:"OAuth2",
          user: 'pseudobrains0@gmail.com',
          clientId: CLIENT_ID,
          clientSecret: CLIENT_SECRET,
          refreshToken: REFRESH_TOKEN,
          accessToken: accsessToken ,
          // pass:"app ",
        }
      });
 
      console.log(emailTo);
      let mailOptions = {
        from: "Stack Bank 📚 <pseudobrains511@gmail.com>",
        to: emailTo,
        subject: subject,
        text: message,
        html:` <div> <h1> ${subject}</h1> 
                 <h4> ${message}</h4> 
                 <br/>
                 <hr/>
                 <p>   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque vel placeat perspiciatis impedit ducimus ipsam nemo asperiores, perferendis ullam quis voluptate! Mollitia ad sapiente quidem numquam blanditiis quam temporibus optio.</p>
                 <h5> From STACK BANK 📚</h5> 
         </div> `
      };
   
      
 const result = transporter.sendMail(mailOptions);
 return result
  
}

module.exports = {
   mailsender
  };

