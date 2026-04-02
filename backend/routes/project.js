const express = require('express');
const router = express.Router();
const { createProject, getAllProjects, filterProjects, getProjectById } = require('../controllers/projectController');
const authMiddleware = require('../middleware/authMiddleware');

// Create a project
router.post('/', authMiddleware, createProject);

// Get all projects
router.get('/', getAllProjects);

// Filter projects
router.get('/filter', filterProjects);

// Get single project
router.get('/:id', getProjectById);

module.exports = router;