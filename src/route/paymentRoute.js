const express = require('express');
const Controller = require('../controller/index')
const { checkAuth } = require('../middleware/check_auth')
const Routers = express.Router();



// API ROUTE 

Routers.post('/createCustomer', checkAuth, Controller.createCustomer);

Routers.post('/addNewCard', checkAuth, Controller.addNewCard)

Routers.post('/createCharge', checkAuth, Controller.createcharge) 

Routers.post('/createCharge', checkAuth, Controller.createcharge) 


exports.Routers = Routers;
