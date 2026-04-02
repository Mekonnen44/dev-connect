const User = require('../models/User');

// Get current user profile
const getCurrentUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update user profile: bio, skills
const updateUserProfile = async (req, res) => {
  try {
    const { bio, skills } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      { bio, skills },
      { new: true, runValidators: true }
    ).select('-password');
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getCurrentUserProfile,
  updateUserProfile
};