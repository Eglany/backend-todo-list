const express = require('express');
const cors = require('cors');
const taskController = require('./controller/taskController');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

app.get('/', (_request, response) => response.status(200).json({ message: 'Backend TO-DO list ' }));

app.get('/task', taskController.getAll);
app.post('/task', taskController.create);
app.delete('/task/:id', taskController.destroy);
