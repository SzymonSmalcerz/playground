const request = require("request");

let fetchCoords = (encodedAddress,callback) => {
  request({
    url : `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json : true
  },(error,res,body) => {
    if(error){
      return callback("could not fetch data from server");
    }else if(body.status == "ZERO_RESULTS"){
      return callback("no data found for this location");
    }
    callback(null,body.results[0].geometry.location);
  })
}

module.exports = {
  fetchCoords
}
