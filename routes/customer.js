
const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customer');

router.get('/', customerController.getAll);

module.exports = router;