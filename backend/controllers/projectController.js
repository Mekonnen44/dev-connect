const Project = require('../models/Project');

// Create a new project
const createProject = async (req, res) => {
  try {
    const project = new Project({ ...req.body, createdBy: req.user.id });
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all projects
const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Filter projects by skills
const filterProjects = async (req, res) => {
  try {
    const { skills } = req.query;
    const query = skills ? { requiredSkills: { $in: skills.split(',') } } : {};
    const projects = await Project.find(query);
    res.json(projects);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get single project
const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json(project);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createProject,
  getAllProjects,
  filterProjects,
  getProjectById
};