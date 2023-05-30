const express = require('express');
const route = express.Router();
const homeController = require('./src/Controllers/homeController');
const contactController = require('./src/Controllers/contactController');

// function middleware(request, response, next) {
//     request.session = { nome: 'Amanda', sobrenome: 'Maria' }
//     console.log('Before middleware');
//     next();
// }

// Home routes
// route.get('/', middleware, homeController.homePage, function(req, res, next) {
//     console.log('After middleware');
//     console.log(req.session.nome);
// });

route.get('/', homeController.homePage);
route.post('/', homeController.GetPost);

// Contact routes
route.get('/contact', contactController.home);


module.exports = route;