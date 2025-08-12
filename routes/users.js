const express = require('express');
const router = express.Router();
const user = require('../controller/users')
const passport = require('passport');
const { storeReturnTo } = require('../middleware');

router.get('/register' , user.renderForm )

router.post('/register' , user.register)

router.get('/login', user.logInForm)

router.post('/login',  storeReturnTo  ,passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), user.logIn);

router.get('/logout' ,  user.logOut);


module.exports = router;