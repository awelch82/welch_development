const express = require("express");
const router = express.Router();
const SmsController = require("../apps/sms");

router.get("", SmsController.getPosts);
router.post("", SmsController.sendMessage);


module.exports = router;
