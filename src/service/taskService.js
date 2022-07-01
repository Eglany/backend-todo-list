const taskModel = require('../model/taskModel');

const getAll = async () => {
  const tasks = await taskModel.getAll();

  return tasks;
};

const create = async (task, status) => {
  const createTask = await taskModel.create(task, status);

  return createTask;
};

module.exports = { getAll, create };
