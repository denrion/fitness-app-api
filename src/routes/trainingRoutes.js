const express = require('express');
const {
  getAllTrainings,
  getTraining,
  createTraining,
  updateTraining,
  deleteTraining,
} = require('../controllers/trainingController');
const Role = require('../constants/Role');
const isAuth = require('../middleware/isAuth');
const restrictTo = require('../middleware/restrictTo');

const router = express.Router();

// Routes below will go through both isAuth & restrictTo middleware first
router.use(isAuth, restrictTo(Role.ADMIN));

router.route('/').get(getAllTrainings).post(createTraining);
router
  .route('/:id')
  .get(getTraining)
  .patch(updateTraining)
  .delete(deleteTraining);

module.exports = router;
