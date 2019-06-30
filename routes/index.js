const router = require('express').Router();

const geocodeRoute = require('./geocodeRoute');

router.get('/geocode/:searchCityState', geocodeRoute);

module.exports = router;
