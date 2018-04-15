const chance = require("chance")();

let {sequelize} = require("./sequelizeConnect"),
    {ApartmentData3} = require("./apartmentModel");


let feedDb = async (numOfApartmentsToFeed) => {
  try {
    for(let i=0;i<( numOfApartmentsToFeed || 10 );i++){
      await ApartmentData3.create({
          address : chance.address(),
          latitude : chance.integer(),
          longitude : chance.integer(),
          square_meters : chance.integer(),
          price_per_meter : chance.integer(),
          otherValues : {
            firstValue : chance.integer(),
            secondValue : true,
            thirdValue : chance.string()
          }
        })
        .catch(e => {
          console.log(e);
        });
    }
  } catch(e){
    throw new Error(e);
  }
}


module.exports = {
  feedDb,
  ApartmentData3
}
