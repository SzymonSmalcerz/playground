
const location = require("./location"),
      weather  = require("./weather");


let printTemperatureAtLocation = (encodedAddress) => {
  location.fetchCoords(encodedAddress)
          .then((location) => {
            return weather.getTemperature(location);
          })
          .then((temperature) => {
            console.log(JSON.stringify(temperature,null,2));
          })
          .catch((e) => {
            console.log(e);
          })
}

module.exports = {
  printTemperatureAtLocation
}
