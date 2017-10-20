module.exports = {
  post: (req, res) => {
    const nodemailer = require('nodemailer'),
      xoath2 = require('xoauth2'),
      EA = require('../emailAuth');

    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        type: 'OAuth2',
        user: EA.EMAIL_AUTH.EMAIL,
        clientId: EA.EMAIL_AUTH.CLIENT_ID,
        clientSecret: EA.EMAIL_AUTH.CLIENT_SECRET,
        refreshToken: EA.EMAIL_AUTH.REFRESH_TOKEN
      }
    });

    let data = req.body;

    transporter
      .sendMail({
        from: EA.EMAIL_AUTH.EMAIL,
        to: EA.EMAIL_AUTH.EMAIL,
        subject: 'Rowdy Mermaid: ' + data.name,
        text:
          '\nFrom: ' +
          data.name +
          '\nEmail: ' +
          data.email +
          '\n\nMessage:\n' +
          data.message
      })
      .then(function() {
        res.sendStatus(200);
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};
