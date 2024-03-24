const routes = require('express').Router();

const myController = require('../controllers');
routes.get('/', myController.nameFunction);


//swagger route
routes.use('/', require('./swagger'));
//restaurant route
routes.use('/restaurant', require('./restaurant'));


module.exports = routes;