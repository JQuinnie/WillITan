const axios = require('axios');
const _ = require('lodash');

const geocodeUrl = 'https://maps.googleapis.com/maps/api/geocode/json';

if (!geocodeUrl) throw new Error('geocodeUrl is missing');

const getLatLng = async (address) => {
  let msg;

  try {
    msg = `Calling geocode API for ${address}`;
    const response = await axios.get(geocodeUrl, {
      params: {
        key: process.env.GEOCODE_KEY,
        address,
      },
    });

    const { results } = response.data;
    if (!results) {
      throw new Error('No data returned from Geocode API');
    }

    const latlng = _.get(results[0], 'geometry.location');
    console.log(`Geocode API return ${JSON.stringify(latlng)} for ${address}`);
    return { location: latlng };
  } catch (err) {
    throw new Error(`${msg} - ${err.message}`);
  }
};

module.exports = {
  getLatLng,
};
