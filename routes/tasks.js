const express = require("express");
const router = express();

const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  editTask,
} = require("../controllers/tasks");

// router.route('/').get((req, res) => {
//     res.send('all items')
// })
router.route("/").get(getAllTasks).post(createTask)
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask).put(editTask)

module.exports = router;
