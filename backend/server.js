const app = require('./app');
const http = require('http');
const server = http.createServer(app);
const socketSetup = require('./socket');

const PORT = process.env.PORT || 3000;

// Setup socket.io
socketSetup(server);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});