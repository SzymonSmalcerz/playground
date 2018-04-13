
const location = require("./location"),
      weather  = require("./weather");


let printTemperatureAtLocation = (encodedAddress) => {
    location.fetchCoords(encodedAddress,(error,locationData) => {
    if(error){
      throw new Error(error);
    }else {
      weather.getTemperature(locationData,(error,weatherData) => {
        if(error){
          throw new Error(error);
        }else{
          console.log(JSON.stringify(weatherData,null,2));
        }
      });
    }
  })
}

module.exports = {
  printTemperatureAtLocation
}
