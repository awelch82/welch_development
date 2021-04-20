const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://aaronwelch82:Jake2017@cluster0-sylmk.mongodb.net/sample_analytics?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true })
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
