const router = require('express').Router();

const geocodeRoute = require('./geocodeRoute');
const getUVIndex = require('./getUVIndex');

router.get('/geocode/:inputAddress', geocodeRoute); // TODO: remove unused
router.get('/getuvindex/:inputAddress', getUVIndex);

module.exports = router;
