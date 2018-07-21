const request = require("request");
const requestProm = require("request-promise");
require("dotenv").config();

module.exports = function(app) {
  const GEOKEY = process.env.GEOCODE_KEY;
  const OPENUVKEY = process.env.OPENUV_KEY;
  let searchCity = "denver+colorado";
  let searchLat;
  let searchLng;
  let searchAlt = "1615";
  let searchDT = "2018-01-24T19:13:14.138Z";

  const geoURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${searchCity}&key=${GEOKEY}`;
  const openUVURL = `https://api.openuv.io/api/v1/uv?lat=${searchLat}&lng=${searchLng}&alt=${searchAlt}&x-access-token=${OPENUVKEY}`;

  // test geocode API with input of city, state to latitude, longitude
  requestProm(geoURL, function(error, response, body) {
    if (error) throw error;

    if (response.statusCode === 200) {
      // console.log(JSON.parse(body).results[0]);
      let city = JSON.parse(body).results[0].address_components[0].short_name;
      searchLat = JSON.parse(body).results[0].geometry.location.lat;
      searchLng = JSON.parse(body).results[0].geometry.location.lng;
      console.log(
        `City: ${city} - Latitude: ${searchLat}, Longitude: ${searchLng}`
      );
    }
  })
    .then(function(response) {
      let options = {
        method: "GET",
        url: `https://api.openuv.io/api/v1/uv?lat=${searchLat}&lng=${searchLng}&alt=${searchAlt}&dt=${searchDT}`,
        headers: {
          "content-type": "application/json",
          "x-access-token": OPENUVKEY
        }
      };
      // test openUV API with input of latitude, longitude, altitude from GeoCodeURL
      request(options, function(error, response, body) {
        if (error) throw new Error(error);

        if (response.statusCode === 200) {
          console.log(JSON.parse(body));
          console.log("UV Max: " + JSON.parse(body).result.uv_max);
          // safe_exposure_time will return null if there are no sun or its before/after sunset, use uv_max_time to test
        }
      });
    })
    .catch(function(err) {
      console.log(err);
    });
};
