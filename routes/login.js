const express = require('express');
const loginRouter = express.Router();
const {loginView, loginUser } = require('../controllers/loginController');
const {registerView, registerUser } = require('../controllers/registerController');
const { dashboardView } = require('../controllers/dashboardController');
const { protectRoute } = require("../auth/protect");

const { registerRequestView, viewRequests, registerRequest, changeStatusRequest, changeStatusProgress, changeStatusCancel, changeStatusFinish } = require("../controllers/requestController");



loginRouter.get('/', loginView);
loginRouter.post('/', loginUser);

loginRouter.get('/login', loginView);
loginRouter.post('/login', loginUser);

loginRouter.get('/register', registerView);
loginRouter.post('/register', registerUser);

loginRouter.get("/dashboard", protectRoute, dashboardView);

loginRouter.get('/viewRequests', viewRequests);

loginRouter.get('/registerRequest', registerRequestView);
loginRouter.post('/registerRequest', registerRequest);

loginRouter.get('/request/request', changeStatusRequest);
loginRouter.get('/request/progress', changeStatusProgress);
loginRouter.get('/request/cancel', changeStatusCancel);
loginRouter.get('/request/finish', changeStatusFinish);

module.exports = loginRouter;
