const express = require('express');
const model = require('./model');

const router = express.Router();

//  Projects
router.get('/', async (req, res) => {
  try {
    const result = await model.findProjects();
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: 'no projects found' });
    }
  } catch (err) {
    res.status(500).json({
      err: 'error while retrieving projects from database',
      message: err.message,
    });
  }
});

router.post('/', async (req, res) => {
  try {
    // if (typeof req.projects_name === 'undefined') {
      // res.status(400).json({ message: 'missing required fields: projects_name' });
    // } else {
      const result = await model.addProject(req.body);
      res.status(201).json(result);
    // }
  } catch (err) {
    res.status(500).json({
      err: 'error while adding project to database',
      message: err.message,
    });
  }
});

//  Tasks
router.get('/:id/tasks', async (req, res) => {
  try {
    // const valid = await model.findProjectById(req.project_id);
    // if (valid) {
      const result = await model.findTasks(req.params.id);
      if (result.length > 0) {
        res.status(200).json(result);
      } else {
        res.status(404).json({ message: 'no tasks found' });
      }
    // } else {
    //   res.status(404).json({ message: 'no projects with matching id found' });
    // }
  } catch (err) {
    console.log(req.id)
    res.status(500).json({
      err: 'error while retrieving tasks from database',
      message: err.message,
    });
  }
});

router.post('/:id/tasks', async (req, res) => {
  try {
    // const valid = await model.findProjectById(req.project_id);
    // if (valid) {
      // if (typeof req.tasks_description === 'undefined') {
        const newTask = { ...req.body, project_id: req.params.id }
        const result = await model.addTask(newTask);
        res.status(201).json(result);
      // } else {
      //   res.status(400).json({ message: 'missing required fields: tasks_description' });
      // }
    // } else {
    //   res.status(404).json({ message: 'no projects with matching id found' });
    // }
  } catch (err) {
    res.status(500).json({
      err: 'error while adding task to database',
      message: err.message,
    });
  }
});

//  Resources
router.get('/:id/resources', async (req, res) => {
  try {
    // const valid = await model.findProjectById(req.project_id);
    // if (valid) {
      const result = await model.findResources(req.params.id);
      if (result.length > 0) {
        res.status(200).json(result);
      } else {
        res.status(404).json({ message: 'no resources found' });
      }
    // } else {
    //   res.status(404).json({ message: 'no projects with matching id found' });
    // }
  } catch (err) {
    res.status(500).json({
      err: 'error while retrieving resources from database',
      message: err.message,
    });
  }
});

router.post('/:id/resources', async (req, res) => {
  try {
    // const valid = await model.findProjectById(req.project_id);
    // if (valid) {
      // if (typeof req.resources_name === 'undefined') {
        const newResource = { ...req.body, project_id: req.params.id }
        const result = await model.addResource(newResource);
        res.status(201).json(result);
      // } else {
      //   res.status(400).json({ message: 'missing required fields: resources_name' });
      // }
    // } else {
    //   res.status(404).json({ message: 'no projects with matching id found' });
    // }
  } catch (err) {
    res.status(500).json({
      err: 'error while adding task to database',
      message: err.message,
    });
  }
});

module.exports = router;
