
const location = require("./location"),
      weather  = require("./weather");


let printTemperatureAtLocation = async (encodedAddress) => {
  try {

    let locationData = await location.fetchCoords(encodedAddress);
    if(locationData.data.status == "ZERO_RESULTS"){
      throw new Error("zero results for this location");
    }else if(locationData.data.status == "OVER_QUERY_LIMIT"){
      throw new Error("OVER_QUERY_LIMIT, you must wait, google's api limit :C ");
    }

    let weatherData = await weather.getTemperature(locationData.data.results[0].geometry.location);
    if(weatherData.data.code == 400){
      throw new Error(weatherData.data.error);
    }
    console.log(JSON.stringify({
      temperature : weatherData.data.currently.temperature,
      apparentTemperature : weatherData.data.currently.apparentTemperature
    },null,2));

  } catch (e){
    console.log(e);
  }
}

module.exports = {
  printTemperatureAtLocation
}
