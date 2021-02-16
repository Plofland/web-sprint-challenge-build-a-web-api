const express = require('express');
const projectsFunc = require('./projects-model');

const router = express.Router();

//*Write out the endpoints that I'll need before writing out the code for each route

router.get('/', (req, res) => {
  //!returns an array of projects (or an empty array) as the body of the response.
});

router.get('/:id', (req, res) => {
  //!returns a project with the given id as the body of the response
});

router.post('/', (req, res) => {
  //!returns the newly created project as the body of the response.
});

router.put('/:id', (req, res) => {
  //!returns the updated project as the body of the response.
});

router.delete('/', (req, res) => {
  //!returns no response body.
});

router.get('/:id/actions', (req, res) => {
  //!sends an array of actions (or an empty array) as the body of the response.
});

module.exports = router;