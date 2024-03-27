
const express = require('express');
const router = express.Router();

const openingHoursController = require('../controllers/openingHours');

router.get('/', openingHoursController.getAll);

module.exports = router;