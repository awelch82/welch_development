require('dotenv').config();
const mongoose = require("mongoose");
const MONGO_USERNAME = process.env.MONGO_USERNAME;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const CUSTOMERS = require("./model");

mongoose
  .connect(`mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0-sylmk.mongodb.net/sample_analytics?retryWrites=true&w=majority`, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log('Connected To Database!')
  })
  .catch(() => {
    console.log('connection Failed');
  });




CUSTOMERS.findOne({name: 'Elizabeth Ray'}, (err, result) => console.log(result));

exports.getData = (req, res, next) => {
  console.log(req.body);
  res.status(200).json({
    status: 'success!'
  })
};
