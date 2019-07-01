const router = require('express').Router();
require('dotenv').config();

const googleMapsClient = require('@google/maps').createClient({
  key: process.env.GEOCODE_KEY,
  Promise,
});

const searchAlt = '1615';
const searchDT = '2018-01-24T19:13:14.138Z';

// route to get geocode lat/lng
module.exports = (req, res, next) => {
  const { inputAddress } = req.params;

  googleMapsClient.geocode({ address: inputAddress }).asPromise()
    .then((response) => {
      const msg = `Fetching geolocation data for city/state: ${inputAddress}`;
      console.log(msg);
      const latlng = response.json.results[0].geometry.location; // returns an object {"lat":39.7508853,"lng":-105.0016393}
      res.send(`Result data for ${inputAddress}: ${JSON.stringify(latlng)}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

// TODO: wrap the geocode call above as a function for async flow processes later
// TODO: use lat/lng to get elevation/altitude
// TODO: use lat/lng and elevation/altitude to get UV Index from OpenUV
