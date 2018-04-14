const connection = require("./mongodb/connection");//establish connection with db
const {userModel,feedDatabaseWithUsers} = require("./mongodb/User/userModel");
const chance = require("chance")();

(async function doStaff(){

  // feedDatabaseWithUsers(); // dont do it more than once (you can, but why :) )

  /* DECLARING NEW MODEL */
  let user = new userModel({
    nick : chance.name().replace(/ /g,""),
    email : chance.email(),
    age : chance.age()
  })


  /* SAVING ELEMENT */
  await user.save().then(res => {
    console.log("SAVED NEW USER:")
    console.log(res);
  }).catch(e => {
    console.log(e);
  })

  /* SEARCHING FOR ELEMENT */

  await userModel.findOne({nick : "szymon"})
           .then((res) => {
            console.log("FOUND SZYMON :")
             console.log(res);
           })
           .catch((e) => {
             console.log(e);
           })

  await userModel.find({ age : { $gt : 30}}) // select users with age > 30
           .select(["nick","age"]) //show only nick and age (we don't care about emails)
           .then(res => {
             console.log("ALL USERS :")
             console.log(JSON.stringify(res,null,2))
           })
           .catch(e => {
             console.log(e);
           })

  /* UPDATING */

  await userModel.findOneAndUpdate({nick : "szymon"}, { $set: { email: chance.email() }})
           .then(async (res) => {
               console.log(`so our old szymon obj :\n ${JSON.stringify(res,null,2)}`)

           })
           .catch(e => {
             console.log(e);
           })


  try {
    let newSzymon = await userModel.find({nick : "szymon"});
    console.log(`but our new szymon obj looks like this :\n ${JSON.stringify(newSzymon,null,2)}`)
  }catch(e){
    throw new Error(e)
  }
  /* REMOVING */

  await userModel.findOneAndRemove({nick : "szymon"})
           .then(async (res) => {

             console.log(`old szymon obj (with changed email) :\n ${JSON.stringify(res,null,2)}`)
           })
           .catch(e => {
             console.log(e);
           })
  try {
    let newSzymon = await userModel.find({nick : "szymon"});
    console.log(`new szymon obj : ${JSON.stringify(newSzymon,null,2)}`)
    console.log("aww i forgot,there is no more szymon in database :C")

  }catch(e){
    throw new Error(e);
  }

  // at the end after removing feeding db with "szymon" element
  user = new userModel({
    nick : "szymon",
    email : "szymon@szymon.szymon",
    age : chance.age()
  })

  await user.save().then(res => {
    console.log("ADDED SZYMON ONCE AGAIN !")
    console.log(res);
  })
})()
