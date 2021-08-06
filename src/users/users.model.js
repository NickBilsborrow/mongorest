const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  watched:{
    type:Array,
    default:[]
  },
  watchlist:{
    type:Array,
    default:[]
  },

});

const User = mongoose.model('User',userSchema);
module.exports = User;
