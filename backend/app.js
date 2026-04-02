const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const projectRoutes = require('./routes/project');
const userRoutes = require('./routes/user');
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
app.use('/api/projects', projectRoutes);
app.use('/api/users', userRoutes);

module.exports = app;