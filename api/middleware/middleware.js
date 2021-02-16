const projectsFunc = require('../projects/projects-model');
const actionsFunc = require('../actions/actions-model');

//*Plan out the middleware that I will be needing before I write out anything
//todo: validat ID, validate action to be posted to server, validate project to be posted to server

const validateId = async (req, res, next) => {
  const { id } = req.params;
  try {
    const actionId = await actionsFunc.get(id);
    if (!actionId) {
      res.status(400).json({
        message: `No action with the id of ${id}`
      });
    } else {
      req.actionId = actionId;
      next();
    }
  } catch (error) {
    res.status(500).json(`Server error: ${error}`);
  }
};

// const validActionsPost = async (req, res, next) => {

// }

module.exports = {
  validateId
};
