const Message = require('../models/Message');

// Save message to the database
const saveMessage = async (data) => {
  try {
    const message = new Message(data);
    await message.save();
  } catch (error) {
    console.error('Error saving message:', error);
  }
};

module.exports = { saveMessage };