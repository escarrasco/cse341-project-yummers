const routes = require('express').Router();

const myController = require('../controllers');
routes.get('/', myController.nameFunction);


//swagger route
routes.use('/', require('./swagger'));



module.exports = routes;