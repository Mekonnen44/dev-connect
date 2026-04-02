const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { getCurrentUserProfile, updateUserProfile } = require('../controllers/userProfileController');

// Get current user profile
router.get('/me', authMiddleware, getCurrentUserProfile);

// Update user profile
router.put('/me', authMiddleware, updateUserProfile);

module.exports = router;