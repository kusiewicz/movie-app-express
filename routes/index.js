const axios = require("axios");
var express = require("express");
var router = express.Router();

const apiBaseUrl = "https://api.themoviedb.org/3";
const APIKey = "0ee3037a8ba577cf63afccc89a8b5bf9";
const popularNow = `${apiBaseUrl}/trending/movie/week?api_key=${APIKey}`;
const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

router.use((req, res, next) => {
  res.locals.imageBaseUrl = imageBaseUrl;
  next();
});

/* GET home page. */
router.get("/", async function (req, res, next) {
  const popularMovies = await axios.get(popularNow, {
    headers: {
      "Accept-Encoding": "application/json",
    },
  });

  res.render("index", {
    moviesData: popularMovies.data.results,
  });
});

module.exports = router;
