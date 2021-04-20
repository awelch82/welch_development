const express = require("express");
const router = express.Router();
const DatatableController = require("../apps/datatable");

router.get("", DatatableController.getData);


module.exports = router;
