const taskService = require('../service/taskService');

const getAll = async (_request, response) => {
  const tasks = await taskService.getAll();
  return response.status(tasks).json(tasks);
};

const create = async (request, response) => {
  const { task, status } = request.body;
  const createTask = await taskService.create(task, status);
  return response.status(201).json(createTask);
};

module.exports = { getAll, create };
