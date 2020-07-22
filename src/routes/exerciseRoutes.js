const express = require('express');

const {
  getAllExercises,
  getExercise,
  createExercise,
  updateExercise,
  deleteExercise,
} = require('../controllers/exerciseController');
const Role = require('../constants/Role');
const isAuth = require('../middleware/isAuth');
const restrictTo = require('../middleware/restrictTo');

const router = express.Router();

// Routes below will go through both isAuth & restrictTo middleware first
router.use(isAuth, restrictTo(Role.ADMIN));

router.route('/').get(getAllExercises).post(createExercise);
router
  .route('/:id')
  .get(getExercise)
  .patch(updateExercise)
  .delete(deleteExercise);

module.exports = router;
