require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

exports.sendMessage = (req, res, next) => {
  req.body.numbers.forEach((number) => {
    client.messages.create({
      to: '+1' + number.clean,
      from: '+17042860328',
      body: req.body.message
    })
      .then((message) => {
        res.status(200).json({
          status: message.status
        })
          .catch(e => {
            res.status(500).json({
              message: e.message
            })
          });
      });
  });
};
