const projectsFunc = require('../projects/projects-model');
const actionsFunc = require('../actions/actions-model');

const validateActionId = async (req, res, next) => {
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

const validateProjectId = async (req, res, next) => {
  const { id } = req.params;
  try {
    const projectId = await projectsFunc.get(id);
    if (!projectId) {
      res.status(400).json({
        message: `No project with the id of ${id}`
      });
    } else {
      req.projectId = projectId;
      next();
    }
  } catch (error) {
    res.status(500).json(`Server error: ${error}`);
  }
};

const validateActionPost = (req, res, next) => {
  const { project_id, description, notes } = req.body
  try {
    if(!project_id || !description || !notes) {
      res.status(400).json({message: `For your action, please enter a Project Id, Description, & Notes`})
    } else {
      next();
    }
  } catch (error) {
    res.status(500).json(`Server error: ${error}`)
  }
};

const validateProjectPost = (req, res, next) => {
  const { name, description } = req.body
  try {
    if(!name || !description) {
      res.status(400).json({message: `For your project, please enter a Name & Description`})
    } else {
      next();
    }
  } catch (error) {
    res.status(500).json(`Server error: ${error}`)
  }
};



module.exports = {
  validateActionId,
  validateActionPost,
  validateProjectId,
  validateProjectPost
};
