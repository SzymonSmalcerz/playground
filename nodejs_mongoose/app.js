const connection = require("./mongodb/connection");//establish connection with db
const {userModel} = require("./mongodb/User/userModel");

let user = new userModel({
  nick : "szymon",
  email : "asd@gmail.com"
})

user.save().then(res => {
  console.log(res);
}).catch(e => {
  console.log(e);
})
