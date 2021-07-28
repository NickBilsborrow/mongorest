const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  rating: {
    type: String,
    default: "unrated",
  },
  watched: {
    type: Boolean,
    default: false,
  },
  genre: {
    type: String,
    required: true,
  },
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
