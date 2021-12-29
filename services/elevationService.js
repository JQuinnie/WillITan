const _ = require('lodash');
const axios = require('axios');

const elevationResponse = require('../mockData/elevationSampleResponse.json');

const elevationUrl = 'https://maps.googleapis.com/maps/api/elevation/json';

if (!elevationUrl) throw new Error('elevationUrl is missing');

const getElevation = async (latLng) => {
  let msg;

  // TODO: add a logger
  const formattedLatLng = `${latLng.lat},${latLng.lng}`;

  try {
    msg = `Calling elevation API for ${formattedLatLng}`;
    // const response = await axios.get(elevationUrl, {
    //   params: {
    //     key: process.env.GOOGLE_MAPS_API_KEY,
    //     locations: formattedLatLng,
    //   },
    // });

    // const { results } = response.data;

    const { results } = elevationResponse; // TODO: remove mock and uncomment actual API call
    if (!results) {
      throw new Error('No data returned from Elevation API');
    }

    const elevation = _.get(results[0], 'geometry.elevation');
    console.log(`Elevation API return ${JSON.stringify(elevation)} for ${formattedLatLng}`);
    return elevation;
  } catch (err) {
    // TODO: format error to not be HTML
    throw new Error(`${msg} - ${err.message}`);
  }
};

module.exports = {
  getElevation,
};
