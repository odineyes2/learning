const express = require("express");

const router = express.Router();

router.route("/").get(express.static(path.join(__dirname, "/views")));

module.exports = router;