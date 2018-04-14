const connection = require("./mongodb/connection");//establish connection with db
const {userModel,feedDatabaseWithUsers} = require("./mongodb/User/userModel");
const chance = require("chance")();


// feedDatabaseWithUsers(); // dont do it more than once (you can, but why :) )

let user = new userModel({
  nick : chance.name().replace(/ /g,""),
  email : chance.email(),
  age : chance.age()
})


/* SAVING ELEMENT */
user.save().then(res => {
  console.log("SAVED NEW USER:")
  console.log(res);
}).catch(e => {
  console.log(e);
})

/* SEARCHING FOR ELEMENT */

userModel.findOne({nick : "szymon"})
         .then((res) => {
          console.log("FOUND SZYMON :")
           console.log(res);
         })
         .catch((e) => {
           console.log(e);
         })

userModel.find({ age : { $gt : 30}}) // select users with age > 30
         .select(["nick","age"]) //show only nick and age (we don't care about emails)
         .then(res => {
           console.log("ALL USERS :")
           console.log(JSON.stringify(res,null,2))
         })
         .catch(e => {
           console.log(e);
         })
