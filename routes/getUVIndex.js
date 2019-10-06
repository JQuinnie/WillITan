const async = require('async');
const googleClient = require('@google/maps');

const config = require('../config.js');

const client = googleClient.createClient({ key: config.key });

// GET /getUVIndex/:inputAddress
module.exports = (req, res, next) => {
  // const { inputAddress } = req.params;
  const inputAddress = '1500 Wynkoop St, Denver CO, 80211';

  const routeMsg = `getting UV Index for ${inputAddress}`;
  console.log(routeMsg);

  function getGeocode(callback) {
    const msg = `fetching lat/lng for address: ${inputAddress}`;
    console.log(msg);

    client.geocode({ address: inputAddress }, (err, result) => {
      if (err) {
        return callback(`Error, can not find lat/lng for: ${inputAddress}`);
      }
      const { location } = result.json.results[0].geometry;

      console.log(`found lat/lng: ${location}`);
      callback(null, result);
    });
  }

  async.auto(
    {
      getGeocode,
    },
    (err, result) => {
      if (err) {
        return next(`Error ${routeMsg}`);
      }
      console.log(result);
      res.send(result.getGeocode.json.results[0].geometry.location);
    },
  );
};
