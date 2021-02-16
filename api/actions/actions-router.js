const express = require('express');
const actionsFunc = require('./actions-model');
const { validateId } = require('../middleware/middleware');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const data = await actionsFunc.get();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', validateId, async (req, res) => {
  res.status(200).json(req.actionId);
});

router.post('/', (req, res) => {
  //!returns the newly created action as the body of the response.
});

router.put('/:id', (req, res) => {
  //!returns the updated action as the body of the response.
});

router.delete('/:id', (req, res) => {
  //!returns no response body.
});

router.use((error, req, res, next) => {
  res
    .status(500)
    .json({ message: error.message, stack: error.stack });
});

module.exports = router;
