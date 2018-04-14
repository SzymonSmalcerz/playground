const mongoose = require("mongoose");
const {userSchema} = require("./userSchema")
let userModel = mongoose.model("userModel", userSchema);
module.exports = {
  userModel
}
