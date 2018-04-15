let {sequelize,Sequelize} = require("./sequelizeConnect");


const ApartmentData3 = sequelize.define('apartmentData3', {
  address : {
    type : Sequelize.STRING,
    allowNull : false
  },
  latitude : {
    type : Sequelize.DOUBLE,
    allowNull : false
  },
  longitude : {
    type : Sequelize.DOUBLE,
    allowNull : false
  },
  square_meters : {
    type : Sequelize.DOUBLE,
    allowNull : false
  },
  price_per_meter : {
    type : Sequelize.DOUBLE,
    allowNull : false
  },
  otherValues : {
    type : Sequelize.JSONB,
    allowNull : true
  }
});


module.exports = {
  ApartmentData3
}
