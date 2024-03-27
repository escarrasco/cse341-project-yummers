const routes = require('express').Router();

const myController = require('../controllers');
routes.get('/', myController.nameFunction);


//swagger route
routes.use('/', require('./swagger'));
//restaurant route
routes.use('/restaurant', require('./restaurant'));

//customers route
routes.use('/customer', require('./customer'));

//location route
routes.use('/location', require('./location'));

//menu route
routes.use('/menu', require('./menu'));

//openingHours route
routes.use('/openingHours', require('./openingHours'));

//review route
routes.use('/review', require('./review'));

module.exports = routes;