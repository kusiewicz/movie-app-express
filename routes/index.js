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

router.get("/movie/:id", async (req, res, next) => {
  const movieId = req.params.id;
  const thisMovieUrl = `${apiBaseUrl}/movie/${movieId}?api_key=${APIKey}`;
  const movieDetails = await axios.get(thisMovieUrl, {
    headers: {
      "Accept-Encoding": "application/json",
    },
  });

  console.log(movieDetails.data);

  res.render("single-movie", {
    movieDetails: movieDetails.data,
  });
});

module.exports = router;
