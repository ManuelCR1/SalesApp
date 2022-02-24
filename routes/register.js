const express = require('express');
const registerRouter = express.Router();
const {registerView, registerUser } = require('../controllers/registerController');


registerRouter.get('/register', registerView);
registerRouter.post('/register', registerUser);

module.exports = registerRouter;