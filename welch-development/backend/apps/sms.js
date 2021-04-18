const accountSid = 'AC47330016f2b6e2bfd4d6e71c57e0ee6c';
const authToken = '1cf3b9b2625d4bb78e12cbdeeefd1948';
const client = require('twilio')(accountSid, authToken);




// const Nexmo = require('nexmo');
// const nexmo = new Nexmo({
//   apiKey: '13091098',
//   apiSecret: 'c3JDVJwYNEQLdnpG'
// }, {debug: true});


// nexmo.message.sendSms(
//   '12015650717', '1' + 7048584042, 'this is a word', { type: 'unicode' },
//   (err, responseData) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(responseData);
//     }
//   }
// )
exports.getPosts = (req, res, next) => {
  const test = req.query.test;
  res.status(200).json({
    data: test
  });
};


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
