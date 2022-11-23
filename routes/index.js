var express = require("express");
var router = express.Router();

const apiBaseUrl = "https://api.themoviedb.org/3";

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
