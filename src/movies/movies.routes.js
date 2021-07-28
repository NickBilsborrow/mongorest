const {Router} = require('express');
const movieRouter = Router();
const {createMovie, findMovie, updateMovie, removeMovie} = require('./movies.controllers')

movieRouter.post('/movies',createMovie);
movieRouter.get('/movies/:title',findMovie);
movieRouter.put('/movies',updateMovie);
movieRouter.delete('/movies/:title',removeMovie);

module.exports = movieRouter