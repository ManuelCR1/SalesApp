const express = require('express');
const loginRouter = express.Router();
const {loginView, loginUser } = require('../controllers/loginController');
const {registerView, registerUser } = require('../controllers/registerController');
const { dashboardView } = require('../controllers/dashboardController');
const { registerProductView, registerProduct } = require('../controllers/productController');
const { protectRoute } = require("../auth/protect");



loginRouter.get('/', loginView);
loginRouter.post('/', loginUser);

loginRouter.get('/login', loginView);
loginRouter.post('/login', loginUser);

loginRouter.get('/register', registerView);
loginRouter.post('/register', registerUser);

loginRouter.get("/registerProduct", registerProductView);
loginRouter.post("/registerProduct", registerProduct);

loginRouter.get("/dashboard", protectRoute, dashboardView);

module.exports = loginRouter;
