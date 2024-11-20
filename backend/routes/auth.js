const express = require('express');
const { signUp, signIn, resetPassword, confirmEmail } = require('../controllers/authController');
const router = express.Router();

router.post('/signup', signUp);
router.get('/confirm', confirmEmail);

router.post('/signin', signIn);
router.post('/reset-password', resetPassword);

module.exports = router;
