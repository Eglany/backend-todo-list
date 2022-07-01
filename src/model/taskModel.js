const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM tasks';
  const tasks = await connection.execute(query);
  return tasks;
};

const create = async (task, status) => {
  const query = 'INSERT INTO tasks (task, status) VALUES (?,?)';
  const createTaks = await connection.execute(query, [task, status]);

  return createTaks;
};

module.exports = { create, getAll };
