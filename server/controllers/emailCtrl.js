module.exports = {
  post: (req, res) => {
    const nodemailer = require('nodemailer');
    EA = require('../emailAuth');

    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: EA.EMAIL_AUTH.USER,
        pass: EA.EMAIL_AUTH.PASS
      }
    });

    let data = req.body;
    console.log('req.body', data);

    transporter
      .sendMail({
        from: EA.EMAIL_AUTH.EMAIL,
        to: EA.EMAIL_AUTH.EMAIL,
        subject: 'Rowdy Murphy: ' + data.name,
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
