const _ = require('lodash');
const axios = require('axios');

const uvResponse = require('../mockData/openUVSampleResponse.json');

const openUVUrl = 'https://api.openuv.io/api/v1/uv';

if (!openUVUrl) throw new Error('openUVUrl is missing');

const getUVIndex = async (location, elevation) => {
  let msg;

  // TODO: add a logger
  // TODO: refactor latLng data
  const formattedLatLng = `${location.lat},${location.lng}`;

  try {
    msg = `Calling OpenUV API for ${formattedLatLng} at ${elevation}`;
    // const response = await axios.get(openUVUrl, {
    //   params: {
    //     lat: location.lat,
    //     lng: location.lng,
    //     alt: elevation,
    //   },
    //   headers: {
    //     'content-type': 'application/json',
    //     'x-access-token': process.env.OPENUV_KEY,
    //   },
    // });

    // const { result } = response.data;

    const { result } = uvResponse; // TODO: remove mock and uncomment actual API call
    if (!result) {
      throw new Error('No data returned from Elevation API');
    }

    const uvIdx = result.uv || '';
    console.log(`OpenUV API return ${JSON.stringify(uvIdx)} for ${formattedLatLng}`);
    return { 'UV-Index': uvIdx };
  } catch (err) {
    // TODO: format error to not be HTML
    throw new Error(`${msg} - ${err.message}`);
  }
};

module.exports = {
  getUVIndex,
};
