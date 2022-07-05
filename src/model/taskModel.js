const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM tasks';
  const tasks = await connection.execute(query);
  return tasks;
};

const create = async (task, status) => {
  const query = 'INSERT INTO tasks (task, status) VALUES (?,?)';
  const [{ insertId }] = await connection.execute(query, [task, status]);

  return insertId;
};

const destroy = async (id) => {
  const query = 'DELETE FROM tasks WHERE id = ?;';
  await connection.execute(query, [id]);
};

module.exports = { create, getAll, destroy };
