const Task = require("../models/Task");
const getAllTasks = (req, res) => {
  res.send("all items at 20:02");
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.send("update task");
};

const deleteTask = (req, res) => {
  res.send("detele task");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
