const express = require('express');
const taskController = require('./controller/taskController');
require('dotenv').config();

const app = express();
const { PORT } = process.env;

app.use(express.json());
app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

app.get('/', (_request, response) => response.status(200).json({ message: 'Backend TO-DO list ' }));

app.get('/task', taskController.getAll);
app.post('/task', taskController.create);
