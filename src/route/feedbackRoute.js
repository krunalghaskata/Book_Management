const express = require('express');
const Controller = require('../controller/index')
const { checkAuth } = require('../middleware/check_auth')
const Routers = express.Router();



// API ROUTE 
Routers.post('/feedbackCreate', checkAuth, Controller.FeedbackCreate)

Routers.delete('/deleteFeedback/:id', checkAuth, Controller.deleteFeedback)

Routers.patch('/updateFeedback/:id', checkAuth, Controller.updateFeedback)

Routers.get('/getfeedback', checkAuth, Controller.getFeedback)

Routers.get("/getAllFeedback", Controller.getAllFeedback)


exports.Routers = Routers;
