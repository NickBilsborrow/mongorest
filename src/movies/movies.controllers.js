const Movie = require("./movies.model");

exports.createMovie = async (req, res) => {
  try {
    const movie = new Movie(req.body);
    const savedmovie = await movie.save();
    res
      .status(200)
      .send({ movie: savedmovie, message: " moive created in database " });
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.findMovie = async (req, res) => {
  try {
    const title = req.params.title;
    const targetmovie = await Movie.findOne({ title: title });
    res.status(200).send({ movie: targetmovie });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.removeMovie = async (req, res) => {
  try {
    const title = req.params.title;
    const removedMovie = await Movie.findOneAndDelete({ title: title });
    res.status(200).send({ title: removedMovie, message: "Movie removed" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateMovie = async (req, res) => {
  try {
    const movie = req.body;
    const updateMovie = await Movie.updateOne(movie);
    res.status(200).send({ Movie: updateMovie, message: "Movie updated" });
  } catch (error) {
    res.status(500).send(error);
  }
};
