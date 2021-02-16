const express = require('express');
const actionsFunc = require('./actions-model');
const {
  validateActionId,
  validateActionPost
} = require('../middleware/middleware');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const data = await actionsFunc.get();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', validateActionId, async (req, res) => {
  res.status(200).json(req.actionId);
});

router.post('/', validateActionPost, async (req, res, next) => {
  try {
    const actionInfo = req.body;
    const data = await actionsFunc.insert(actionInfo);
    res.json(data)
  } catch (error) {
    next(error)
  }
});

router.put('/:id', validateActionId, validateActionPost, async (req, res, next) => {
  try {
    const { id } = req.params;
    const changes = req.body;
    const data = await actionsFunc.update(id, changes);
    res.json(data)
  } catch (error) {
    next(error)
  }
});

router.delete('/:id', validatActionId, (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await actionsFunc.remove(id);
    res.json(data)
  } catch (error) {
    next(error)
  }
});

router.use((error, req, res, next) => {
  res
    .status(500)
    .json({ message: error.message, stack: error.stack });
});

module.exports = router;
