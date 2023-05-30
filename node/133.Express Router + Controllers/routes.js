const express = require('express');
const route = express.Router();
const homeController = require('./Controllers/homeController');
const contactController = require('./Controllers/contactController');

// Home routes
route.get('/', homeController.homePage);
route.post('/', homeController.GetPost);

// Contact routes
route.get('/contact', contactController.home);


module.exports = route;