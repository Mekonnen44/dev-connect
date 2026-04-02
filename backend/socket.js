const { saveMessage } = require('./controllers/chatController');

// Initialize socket.io
module.exports = (server) => {
  const io = require('socket.io')(server);

  io.on('connection', (socket) => {
    console.log('New client connected');
    
    // Join room
    socket.on('joinRoom', ({ roomId }) => {
      socket.join(roomId);
      console.log(`Client joined room ${roomId}`);
    });

    // Handle message sending
    socket.on('sendMessage', async (data) => {
      const { roomId, content, sender } = data;

      // Emit to the room
      io.to(roomId).emit('receiveMessage', { content, sender, timestamp: new Date() });

      // Save the message
      saveMessage({ content, sender, roomId });
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
};