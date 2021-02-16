const express = require('express');
const projectsFunc = require('./projects-model');
const {
  validateProjectId
} = require('../middleware/middleware');

const router = express.Router();

//*Write out the endpoints that I'll need before writing out the code for each route

router.get('/', async (req, res, next) => {
  try {
    const data = await projectsFunc.get();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', validateProjectId, (req, res) => {
  res.status(200).json(req.projectId);
});

router.post('/', async (req, res, next) => {
  try {
    const projectInfo = req.body;
    const data = await projectsFunc.insert(projectInfo);
    res.json(data)
  } catch (error) {
    next(error)
  }
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

router.use((error, req, res, next) => {
  res
    .status(500)
    .json({ message: error.message, stack: error.stack });
});

module.exports = router;
