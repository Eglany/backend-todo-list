const connection = require('./connection')

const create = (task, status) => {
  const query = 'INSERT INTO tasks (task, status) VALUES (?,?)';
  const createTaks = await connection.execute(query, [task, status]);
      
  return createTaks

}

const getAll = async () => {
  const query = 'SELECT * FROM tasks';
  const tasks = await connection.execute(query);
  return tasks;
}