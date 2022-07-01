const express = require('express')
require('dotenv').config(); 

const app = express();
const PORT = process.env.PORT

app.use(express.json())
app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

app.get('/', (_request, response) => response.status(200).json({message: 'Backend TO-DO list '}))