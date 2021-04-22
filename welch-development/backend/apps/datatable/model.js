const mongoose = require("mongoose");

const CUSTOMER_SCHEMA = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  username: String,
  name: String,
  address: String,
  birthdate: Date,
  email: String,
  active: Boolean,
  accounts: Array
});

module.exports =  mongoose.model('customers', CUSTOMER_SCHEMA);
