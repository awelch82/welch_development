const express = require("express");
const router = express.Router();
const DatatableController = require("../apps/datatable/datatable");

router.get("", DatatableController.getData);


module.exports = router;
