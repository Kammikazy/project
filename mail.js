module.exports = function(to, subject, text) {
  const config = require("./Config/config.json")
  const mailer = require('nodemailer')

  var transporter = mailer.createTransport({
    service: 'gmail',
    secure: false,
    auth: {
      user: config.SMTP_USERNAME,
      pass: config.SMTP_PASSWORD
    },
    tls: {
      rejectUnauthorized: false
    }
  });
  const message = {
    from: config.SMTP_USERNAME,
    to: to,
    subject: subject,
    text: text
  }

  transporter.sendMail(message, function(error, response) {
    if (error)
      console.log(error)
    else
      console.log("Email enviado: ");
    transporter.close();
  })

}
