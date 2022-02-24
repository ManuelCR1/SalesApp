const express = require('express');
const dashboardRouter = express.Router();
const { dashboardView } = require('../controllers/dashboardController');


dashboardRouter.get('/dashboard', dashboardView);

module.exports = dashboardRouter;
