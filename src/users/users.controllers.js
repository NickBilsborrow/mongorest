const User = require("./users.model");

exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    res
      .status(200)
      .send({ user: savedUser, message: " User created in database " });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.findUser = async (req, res) => {
  try {
    const user = req.params.username;
    const targetUser = await User.findOne({ username: user });
    res.status(200).send({ user: targetUser });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.removeUser = async (req, res) => {
  try {
    const user = req.body.username;
    const password = req.body.password;
    const removedUser = await User.findOneAndDelete({
      username: user,
      password: password,
    });
    res.status(200).send({ user: removedUser, message: "User removed" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateUser = async (req, res) => {
  try {
    console.log(req.body.oldPassword);
    let updateUser;
    const filter = req.body.oldUsername;
    const oldPass = req.body.oldPassword;
    const user = req.body.newUsername;
    const newPass = req.body.newPassword;
    const email = req.body.email;
    console.log(req.body.newPassword);
    if (user) {
      updateUser = await User.updateOne(
        { username: filter },
        { username: user }
      );
    } else if (newPass) {
      console.log({ username: filter, password: oldPass });
      updateUser = await User.updateOne(
        { username: filter, password: oldPass },
        { password: newPass }
      );
    } else if (email) {
      updateUser = await User.updateOne(
        { username: filter, password: oldPass },
        { email: email }
      );
    }

    res.status(200).send({ user: updateUser, message: "User modified" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getUserWatched = async (req, res) => {
  try {
    const targetUser =await User.findOne({ username: req.params.username });
    
    res.status(200).send(targetUser.watched);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.addUserWatched = async (req, res) => {
  try {

    console.log(req.body.username)
    console.log(req.body.movie)
    const user = await User.findOne({ username: req.body.username });
    
    const updateUser = await User.updateOne(
      { username: req.body.username },
      {$push: {watched: [req.body.movie]}}
    );
    console.log(updateUser)
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.removeUserWatched = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    const index = user.watched.indexOf(req.body.movie)
    user.watched.splice(index,1)    
    const updateUser = await User.findOneAndUpdate(
      { username: req.body.username },
      user
    );
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getUserWatchlist = async (req, res) => {
  try {
    console.log(req.params.username)
    const targetUser = await User.findOne({ username: req.params.username });
    console.log(targetUser)
    res.status(200).send(targetUser.watchlist);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.addUserWatchlist = async (req, res) => {
  try {
   
    const user = await User.findOne({ username: req.body.username });
    
    user.watchlist.push(req.body.movie);
    
    const updateUser =await User.findOneAndUpdate(
      { username: req.body.username },
      user
    );
    res.status(200).send({newWatchlist:req.body.movie,message:"new movie added to watch list"})
  } catch (error) {
    res.status(500).send(error);
    console.log(error)
  }
};

exports.removeUserWatchlist = async (req, res) => {
  try {
    console.log(req.body.username)
    console.log(req.body.movie)
    const user = await User.findOne({ username: req.body.username });
    console.log(user)
    const index = user.watchlist.indexOf(req.body.movie)
    console.log(index)
    user.watchlist.splice(index,1)    
    const updateUser = await User.findOneAndUpdate(
      { username: req.body.username },
      user
    );
  } catch (error) {
    res.status(500).send(error);
  }
};