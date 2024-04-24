const express = require('express');
const Controller = require('../controller/index')
const { checkAuth } = require('../middleware/check_auth')
const Routers = express.Router();


// API ROUTE 


Routers.post('/AddToCart', checkAuth, Controller.userAddToCartBook)

Routers.delete('/removeCart/:id', checkAuth, Controller.removeCart)

Routers.patch('/updateCart/:id', checkAuth, Controller.updateCart)

Routers.get('/getCart', checkAuth, Controller.getCart)

 




exports.Routers = Routers;

