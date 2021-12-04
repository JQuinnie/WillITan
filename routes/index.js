const router = require('express').Router();
const geocodeRoute = require('./geocodeRoute');
const getUVIndex = require('./getUVIndex');
const tanCheck = require('./tanCheck');

router.get('/tanchecker', tanCheck);
router.get('/getgeocode/:inputAddress', geocodeRoute); // TODO: remove unused
router.get('/getuvindex/:inputAddress', getUVIndex); // TODO: move into upper level service

module.exports = router;
