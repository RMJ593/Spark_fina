const express = require('express');
const { addCredits, getCredits } = require('../controllers/creditsController');
const { verifyAuth } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/add', verifyAuth, addCredits);
router.get('/', verifyAuth, getCredits);

module.exports = router;
