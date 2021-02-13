const express = require('express');
const morgan = require('morgan');
const server = express();
const projectsRouter = require('./projects/projects-router')
const actionsRouter = require('./actions/actions-router')

server.use(express.json(), morgan('dev'))
server.use('/api/projects', projectsRouter)
server.use('/api/actions', actionsRouter)

server.get('/', (req, res) => {
  res.send(`<h2>Server is up and running!</h2>`)
})

module.exports = server;
