const express = require('express');

const router = express.Router();

const { registerUser, userLogin, getCurrentUser, userLogout } = require("../controller/authController");

router.post('/register', registerUser);
router.post('/login', userLogin);
router.post('/logout', userLogout);
router.get('/me', getCurrentUser);

module.exports = router;