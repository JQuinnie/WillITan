const geocode = require('../services/geocodeService');

// This function wraps all upstream calls
module.exports = async (req, res, next) => {
  const { address } = req.query; // TODO: do sanitization

  let msg;

  try {
    const latLngResult = await geocode.getLatLng(address);

    res.send(latLngResult);
  } catch (err) {
    next(new Error(`${msg} - ${err.message}`));
  }
};
