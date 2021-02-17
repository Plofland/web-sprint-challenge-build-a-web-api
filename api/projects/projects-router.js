const express = require('express');
const projectsFunc = require('./projects-model');
const {
  validateProjectId,
  validateProjectPost
} = require('../middleware/middleware');

const router = express.Router();

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

router.put('/:id', validateProjectId, validateProjectPost, async (req, res, next) => {
  try {
    const { id } = req.params;
    const changes = req.body;
    const data = await projectsFunc.update(id, changes);
    res.json(data)
  } catch (error) {
    next(error)
  }
});

router.delete('/:id', validateProjectId, async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await projectsFunc.remove(id);
    res.json(data)
  } catch (error) {
    next(error)
  }
});

router.get('/:id/actions', validateProjectId, (req, res) => {
  //!sends an array of actions (or an empty array) as the body of the response.
  res.status(200).json(req.projectId.actions);
});

router.use((error, req, res) => {
  res
    .status(500)
    .json({ message: error.message, stack: error.stack });
});

module.exports = router;
