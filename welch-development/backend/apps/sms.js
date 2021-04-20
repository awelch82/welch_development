const accountSid = 'AC47330016f2b6e2bfd4d6e71c57e0ee6c';
const authToken = '96a6d32d6714e764ba6d16bd3ee273eb';
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
