const {Router} = require('express');
const userRouter = Router();
const {createUser, findUser, updateUser, removeUser, getUserMovies, getUserWatched, addUserWatched, removeUserWatched, getUserWatchlist, addUserWatchlist, removeUserWatchlist} = require('./users.controllers')

userRouter.post('/users',createUser);
userRouter.get('/users/:username',findUser);
userRouter.put('/users',updateUser);
userRouter.delete('/users/:username',removeUser);
userRouter.post('/deleteUsers' ,removeUser)
userRouter.get('/users/watched/:username',getUserWatched)
userRouter.post('/users/watched/add',addUserWatched)
userRouter.post('/users/watched/remove',removeUserWatched)
userRouter.get('/users/watchlist/:username',getUserWatchlist)
userRouter.post('/users/watchlist/add',addUserWatchlist)
userRouter.post('/users/watchlist/remove',removeUserWatchlist)
module.exports = userRouter