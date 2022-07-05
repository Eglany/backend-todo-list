const taskModel = require('../model/taskModel');

const getAll = async () => {
  const tasks = await taskModel.getAll();

  return tasks;
};

const create = async (task, status) => {
  const id = await taskModel.create(task, status);
  return { id, task, status };
};

const destroy = async (id) => {
  await taskModel.destroy(id);
};

module.exports = { getAll, create, destroy };
