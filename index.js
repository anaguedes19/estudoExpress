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
  const {id} = request.params; //aqui pegamos o id
  const {title, owner} = request.body; // retornar uma nova informação
  
  const projectIndex = projects.findIndex(project => project.id === id);
  
  if (projectIndex < 0) {
      return response.status(400).json({error: 'Projeto não encontrado'});
  }

  // agora que tenho indice vou criar uma nova informação do projeto 

  const project = { 
    id, 
    title,
    owner,
  }

projects[projectIndex] = project;

  return response.json(project);
});

app.delete('/projects/:id', (request, response) => {
 const {id} = request.params

 const projectIndex = projects.findIndex(project => project.id === id);

 if (projectIndex < 0) {
  return response.status(400).json({error: 'Projeto não encontrado'});
}

projects.splice(projectIndex, 1);

 
  return response.status(204).send();
});

app.listen(3000, () => {
  console.log('Servidor rodando');

})