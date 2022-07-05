const taskService = require('../service/taskService');

const getAll = async (_request, response) => {
  const [tasks] = await taskService.getAll();
  return response.status(200).json(tasks);
};

const create = async (request, response) => {
  const { task, status } = request.body;
  const createTask = await taskService.create(task, status);
  return response.status(201).json(createTask);
};

const destroy = async (request, response) => {
  const { id } = request.params;
  await taskService.destroy(id);
  return response.status(200).json({ message: 'tarefa deletada' });
};

module.exports = { getAll, create, destroy };
