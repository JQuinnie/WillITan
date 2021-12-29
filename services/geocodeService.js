const _ = require('lodash');
const axios = require('axios');

const geocodeResponse = require('../mockData/geocodeSampleResponse.json');

// TODO: elevationAPI returns latLng, so geocode call might not be needed

const geocodeUrl = 'https://maps.googleapis.com/maps/api/geocode/json';

if (!geocodeUrl) throw new Error('geocodeUrl is missing');

const getLatLng = async (address) => {
  let msg;

  // TODO: add a logger

  try {
    // msg = `Calling geocode API for ${address}`;
    // const response = await axios.get(geocodeUrl, {
    //   params: {
    //     key: process.env.GOOGLE_MAPS_API_KEY,
    //     address,
    //   },
    // });

    // const { results } = response.data;

    const { results } = geocodeResponse; // TODO: remove mock and uncomment actual API call
    if (!results) {
      throw new Error('No data returned from Geocode API');
    }

    const latlng = _.get(results[0], 'geometry.location');
    console.log(`Geocode API return ${JSON.stringify(latlng)} for ${address}`);
    return { location: latlng };
  } catch (err) {
    // TODO: format error to not be HTML, better error
    throw new Error(`${msg} - ${err.message}`);
  }
};

module.exports = {
  getLatLng,
};
