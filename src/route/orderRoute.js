const express = require('express');
const Controller = require('../controller/index')
const { checkAuth } = require('../middleware/check_auth')
const Routers = express.Router();



// API ROUTE 


Routers.post('/orderBook/:id', checkAuth, Controller.orderBook)

Routers.get("/getOrder", checkAuth, Controller.getOrder)

Routers.get('/authorFindAllOrder', checkAuth, Controller.authorFindUserOreder)

Routers.patch('/statusOrder', checkAuth, Controller.statusOrder)







exports.Routers = Routers;

