const db = require('../data/db-config');

// Projects
function findProjects() {
  return db('projects');
}

function findProjectById(projectId) {
  return db('projects').where({ projectId }).first();
}

function addProject(project) {
  return db('projects').insert(project);
}

// Tasks
function findTasks(projectId) {
  return db('projects as p')
    .join('tasks as t', 't.project_id', 'p.id')
    .select('p.projects_name', 't.tasks_notes', 't.tasks_description', 't.tasks_completed')
    .where('p.id', projectId);
}

function findTaskById(taskId) {
  return db('tasks').where({ taskId }).first();
}

function addTask(task) {
  return db('tasks').insert(task);
}

// Resources
function findResources(projectId) {
  return db('projects as p')
    .join('resources as r', 'r.project_id', 'p.id')
    .select('p.projects_name', 'r.resources_name', 'r.resources_description')
    .where('p.id', projectId);
}

function findResourcesById(resourceId) {
  return db('resources').where({ resourceId }).first();
}

function addResource(resource) {
  return db('resources').insert(resource);
}

module.exports = {
  findProjects,
  findProjectById,
  addProject,
  findTasks,
  findTaskById,
  addTask,
  findResources,
  findResourcesById,
  addResource,
};
