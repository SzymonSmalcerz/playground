const axios = require("axios");

let fetchCoords = (encodedAddress) => {
  return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`);
}

module.exports = {
  fetchCoords
}
