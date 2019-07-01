const router = require('express').Router();

const geocodeRoute = require('./geocodeRoute');

router.get('/geocode/:inputAddress', geocodeRoute);

module.exports = router;
