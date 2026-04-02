const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => console.log('Connected to MongoDB'));

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Example of a protected route
drugMiddleware, (req, res) => {
  res.send('This is a protected route');
});

module.exports = app;