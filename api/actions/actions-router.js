const express = require('express');
const actionsFunc = require('./actions-model');

const router = express.Router();

//*Write out the endpoints that I'll need before writing out the code for each route

router.get('/', (req, res) => {
  //returns an array of actions (or an empty array) as the body of the response.
})

router.get('/:id', (req, res) => {
  //returns an action with the given id as the body of the response.
})

router.post('/', (req, res) => {
  //returns the newly created action as the body of the response.
})

router.put('/:id', (req, res) => {
  //returns the updated action as the body of the response.
})

router.delete('/:id', (req, res) => {
  //returns no response body.
})