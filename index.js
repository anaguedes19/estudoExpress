const {response} = require('express');
const express = require ('express');
const {uuid} = require('uuidv4')
const app = express();

app.use(express.json());
const projects = [];

//console.log(app);
/**
 *  Quere Params: Vamos Usar principalmente para filtros e paginação
 * Route Params: Identificar recursos na hora de atualizar ou deletar
 * Request Body: Resto do conteúdo na hora de criar ou editar um recurso
 * npm start = para iniciar o servidor
 */

app.get('/projects', (request, response) => {
  //  const { title, owner} = request.query

  return response.json(projects)
});

app.post('/projects', (request, response) => {

  const { title, owner } = request.body;
  console.log(title);
  console.log(owner);

  const project = { id: uuid(), title, owner};

  projects.push(project); 
  return response.json(project); 
});

app.put('/projects/:id', (request, response) => {
  const params = request.params;

  console.log(params)
  
  return response.json([
    'Projeto 60',
    'Projeto 2',
    'Projeto 3',
    'Projeto 4',
    'Projeto 5',
   ])
});

app.delete('/projects/:id', (request, response) => {
  return response.json([
   'Projeto 60',
   'Projeto 2',
  
  ]);
});

app.listen(3000, () => {
  console.log('Servidor rodando');

})