const express = require('express');
const { uuid } = require('uuidv4');

const app = express();

app.get('/projects', (request, response) => {
  return response.json({ message: 'Hello World' });
});

app.listen(3333, () => {
  console.log('Servidor rodando!');
})