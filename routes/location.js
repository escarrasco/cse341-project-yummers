
const express = require('express');
const router = express.Router();

const locationController = require('../controllers/location');

router.get('/', locationController.getAll);

module.exports = router;