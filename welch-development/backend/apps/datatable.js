require('dotenv').config();
const mongoose = require("mongoose");
const MONGO_USERNAME = process.env.MONGO_USERNAME;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;

mongoose
  .connect(`mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0-sylmk.mongodb.net/sample_analytics?retryWrites=true&w=majority`, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log('Connected To Database!')
  })
  .catch(() => {
    console.log('connection Failed');
  });


exports.getData = (req, res, next) => {
  res.status(200).json({
    status: 'success!'
  })
};
