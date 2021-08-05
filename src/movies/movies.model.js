const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  rating: {
    type: String,
    default: "unrated",
    required: true,
  },
  watched: {
    type: Boolean,
    default: false,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
