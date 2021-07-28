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
    const user = req.params.username;
    const removedUser = await User.findOneAndDelete({ username: user });
    res.status(200).send({ user: removedUser, message: "User removed" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = req.body;
    const removedUser = await User.updateOne(user);
    res.status(200).send({ user: removedUser, message: "User updated" });
  } catch (error) {
    res.status(500).send(error);
  }
};
