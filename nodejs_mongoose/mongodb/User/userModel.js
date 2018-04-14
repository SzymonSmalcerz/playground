const mongoose = require("mongoose");
const {userSchema} = require("./userSchema");
const chance = require("chance")();

let userModel = mongoose.model("userModel", userSchema);

let feedDatabaseWithUsers = async (howManyUsersToAdd) => {
  try {

    await new userModel({
      nick : "szymon", // one known user, for removing setting ets ... purposes :), let the rest be random
      email : chance.email(),
      age : chance.age()
    }).save()

    howManyUsersToAdd = howManyUsersToAdd || 20; // by default add 20 users to database

    for(let i=0;i<howManyUsersToAdd;i++){
      await new userModel({
        nick : chance.name().replace(/ /g,""),
        email : chance.email(),
        age : chance.age()
      }).save()
    }

  } catch (e){
    throw new Error(e);
  }
}
module.exports = {
  userModel,
  feedDatabaseWithUsers
}
