const request = require("request");
require("dotenv").config();

module.exports = function(app) {
  const APIKEY = process.env.GEOCODE_KEY;
  let searchCity = "denver+colorado";
  const newURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${searchCity}&key=${APIKEY}`;

  // test geocode API
  request(newURL, function(error, response, body) {
    if (error) throw error;

    if (response.statusCode === 200) {
      // console.log(JSON.parse(body).results[0]);
      let city = JSON.parse(body).results[0].address_components[0].short_name;
      let lat = JSON.parse(body).results[0].geometry.location.lat;
      let lng = JSON.parse(body).results[0].geometry.location.lng;
      console.log(`City: ${city} - Latitude: ${lat}, Longitude: ${lng}`);
    }
  });
};
