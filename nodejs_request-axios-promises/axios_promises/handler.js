
const location = require("./location"),
      weather  = require("./weather");


let printTemperatureAtLocation = (encodedAddress) => {
  location.fetchCoords(encodedAddress)
          .then((location) => {
            if(location.data.status == "ZERO_RESULTS"){
              throw new Error("zero results for this location");
            }else if(location.data.status == "OVER_QUERY_LIMIT"){
              throw new Error("OVER_QUERY_LIMIT, you must wait, google's api limit :C ");
            }else {
              return weather.getTemperature(location.data.results[0].geometry.location);
            }
          })
          .then((temperature) => {
            if(temperature.data.code == 400){
              throw new Error(temperature.data.error);
            }
            console.log(JSON.stringify({
              temperature : temperature.data.currently.temperature,
              apparentTemperature : temperature.data.currently.apparentTemperature
            },null,2));
          })
          .catch((e) => {
            console.log(e);
          })
}

module.exports = {
  printTemperatureAtLocation
}
