
const express = require('express');
const router = express.Router();

const restaurantController = require('../controllers/restaurant');

router.get('/', restaurantController.getAll);

module.exports = router;