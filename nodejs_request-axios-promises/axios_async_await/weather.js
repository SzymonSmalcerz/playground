const axios = require("axios");

let getTemperature = (obj) => {
  return axios.get(`https://api.forecast.io/forecast/bdee841489d01944a6e0412bb833bec3/${obj.lat},${obj.lng}`);
}

module.exports = {
  getTemperature
}
