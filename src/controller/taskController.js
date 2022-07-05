const taskService = require('../service/taskService');

const getAll = async (_request, response) => {
  try {
    const [tasks] = await taskService.getAll();
    return response.status(200).json(tasks);
  } catch (error) {
    console.log(error);
    return response.status(500).json({ message: 'Erro no Servidor' });
  }
};

const create = async (request, response) => {
  try {
    const { task, status } = request.body;
    const createTask = await taskService.create(task, status);
    return response.status(201).json(createTask);
  } catch (error) {
    console.log(error);
    return response.status(500).json({ message: 'Erro no Servidor' });
  }
};

const destroy = async (request, response) => {
  try {
    const { id } = request.params;
    await taskService.destroy(id);
    return response.status(200).done();
  } catch (error) {
    console.log(error);
    return response.status(500).json({ message: 'Erro no Servidor' });
  }
};

module.exports = { getAll, create, destroy };
