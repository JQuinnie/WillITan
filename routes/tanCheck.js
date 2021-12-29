const elevation = require('../services/elevationService');
const geocode = require('../services/geocodeService');
const openUV = require('../services/openUVService');

// This function wraps all upstream calls
module.exports = async (req, res, next) => {
  const { address } = req.query; // TODO: do sanitization

  let msg;

  try {
    // get latlng
    const latLngResult = await geocode.getLatLng(address);

    // TODO: get elevation / altitude
    const elevationResult = await elevation.getElevation(latLngResult.location);

    // TODO: get UV index
    const uvResult = await openUV.getUVIndex(latLngResult.location, elevationResult);

    res.send(uvResult);
  } catch (err) {
    next(new Error(`${msg} - ${err.message}`));
  }
};
