const {Schema} = require("mongoose");

module.exports = {
  userSchema : new Schema({
    nick : {
      type : String,
      required : true,
      minlength : 4,
      maxlength : 20,
      match : /^[a-zA-z0-9]+$/
    },
    email : {
      type : String,
      required : true,
      minlength : 5,
      maxlength : 35,
      match : /^[a-zA-z0-9]+@[a-zA-z0-9]+\.[a-zA-z]+$/
    },
    age : {
      type : Number,
      required : true,
      min : 0,
      max : 200
    }
  })
}
