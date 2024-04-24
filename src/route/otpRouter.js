const express = require('express');
const Controller = require('../controller/index')
const { checkAuth } = require('../middleware/check_auth')
const Routers = express.Router();



// API ROUTE 

Routers.post('/sendOtp', checkAuth, Controller.sendOtp);

Routers.post('/verifyOtp', checkAuth, Controller.verifyOtp)



exports.Routers = Routers;
