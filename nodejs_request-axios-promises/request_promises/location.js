const request = require("request");

let fetchCoords = (encodedAddress) => {
  return new Promise((resolve,reject) => {
    request({
      url : `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
      json : true
    },(error,res,body) => {
      if(error){
        reject("could not fetch data from server");
      }else if(body.status == "ZERO_RESULTS"){
        reject("no data found for this location");
      }else if(body.status == "OVER_QUERY_LIMIT"){
        reject("OVER_QUERY_LIMIT, you must wait, google's api limit :C ");
      }else {
        resolve(body.results[0].geometry.location);
      }
    })
  })
}

module.exports = {
  fetchCoords
}
