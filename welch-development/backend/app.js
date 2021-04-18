const express = require('express');
const path = require("path");
const smsRoutes = require("./routes/sms");
var bodyParser = require('body-parser');


const app = express();
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader('Access-Control-Allow-Methods', "GET, POST, PATCH, DELETE, OPTIONS");
  next();
})

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use("/", express.static(path.join(__dirname, "dist")));
app.use('/api/sms', smsRoutes);



app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
})

module.exports = app;
