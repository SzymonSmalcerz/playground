let {feedDb,ApartmentData3} = require("./feedDatabase");
const {Op} = require("sequelize");
(async function(){
  // await feedDb(1000); // run only once !!!!!!!!!!!!!!!!!!!!!!!!!!!!! :D


  // // first step find all
  // console.log("FETCHING ALL USERS:")
  // await ApartmentData3.findAll()
  //               .then(res => {
  //                 console.log(JSON.stringify(res,null,2));
  //               })
  //               .catch(e => {
  //                 console.log(e)
  //               }) ;
  // console.log("\n\n\n")

  // OR MAYBE NOT, you can print all but first drop db and change number provided to feedDb


  // first step find all with "Circle" in address (after feeding db with 1000 random addresses you should find at least one)
  console.log("FETCHING ALL USERS:")
  await ApartmentData3.findAll({
    where : {
      address : {
        [Op.like] : "%Circle%"
      },
      otherValues : {
        firstValue : {
          [Op.gte] : 8427710034264060
        }
      }
    }
  })
  .then(res => {
    console.log(JSON.stringify(res,null,2));
  })
  .catch(e => {
    console.log(e)
  }) ;

  console.log("\n\n\n")
})()
