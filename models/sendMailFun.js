
const nodemailer = require("nodemailer");
const {google} = require("googleapis")

const oAuth2client = new google.auth.OAuth2(process.env.CLIENT_ID,process.env.CLIENT_SECRET,process.env.REDIRECT_URL)
 
oAuth2client.setCredentials({refresh_token:process.env.REFRESH_TOKEN })
   
      

  async function mailsender (emailTo,subject, message1,message2='',message3="",message4="")  { 
    const accsessToken = await oAuth2client.getAccessToken()

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        // host: "smtp.gmail.com",
        // port: 465,
        // secure: true,
        auth: { 
          type:"OAuth2",
          user: process.env.EMAIL,
          clientId: process.env.CLIENT_ID,
          clientSecret: process.env.CLIENT_SECRET,
          refreshToken: process.env.REFRESH_TOKEN,
          accessToken: accsessToken,
        }
      });
 
      console.log(emailTo);
      let mailOptions = {
        from: "Stack Bank 📚 <pseudobrains511@gmail.com>",
        to: emailTo,
        subject: subject,
        text: message,
        html:` <div> <h1> ${subject}</h1> 
                 <h4> ${message1}</h4>
                 <h4> ${message2}</h4> 
                 <h4> ${message3}</h4> 
                 <h4> ${message4}</h4>  
                 <hr/>
                 <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque vel placeat perspiciatis impedit ducimus ipsam nemo asperiores, perferendis ullam quis voluptate! Mollitia ad sapiente quidem numquam blanditiis quam temporibus optio.</p>
                 <br/>
                 <hr/>
                 <br/>
                 <h5> From STACK BANK 📚</h5> 
         </div> `
      };
   
      
 const result = transporter.sendMail(mailOptions);
 return result

}

module.exports = {
   mailsender
  };

