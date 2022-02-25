const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const passport = require('passport');
const { loginCheck } = require('./auth/passport');
const session = require('express-session');


loginCheck(passport);

dotenv.config();

//Routes
const login = require('./routes/login')
const register = require('./routes/register')
const dashboard = require('./routes/dashboard')

const database = process.env.MONGOLAB_URI;

app.use(express.urlencoded({extended: false}));

mongoose.connect(database, {useUnifiedTopology: true, useNewUrlParser: true })
.then(() => console.log('db connected'))
.catch(err => console.log(err));

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use(session({
    secret:'oneboy',
    saveUninitialized: true,
    resave: true
  }));

app.use(passport.initialize());
app.use(passport.session())

app.use('/', login);
app.use('/dashboard', dashboard);
app.use('/register', register);


app.listen(PORT, console.log("Server start on port: " + PORT))


