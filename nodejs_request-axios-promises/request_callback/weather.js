// `https://api.forecast.io/forecast/4a04d1c42fd9d32c97a2c291a32d5e2d/${lat},${lng}`,
const request = require("request");

let getTemperature = (obj,callback) => {
  request({
    url : `https://api.forecast.io/forecast/bdee841489d01944a6e0412bb833bec3/${obj.lat},${obj.lng}`,
    json : true
  },(error,res,body) => {
    if(error){
      return callback("could not fetch data from server");
    }else if(body.code == 400){
      return callback(body.error);
    }
    callback(null,{
      temperature : body.currently.temperature,
      apparentTemperature : body.currently.apparentTemperature
    });
  })
}

module.exports = {
  getTemperature
}
