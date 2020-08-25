/* eslint-disable no-unused-vars */
const {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
} = require('./handlerFactory');
const Training = require('../models/Training/training.model');

/**
 * @desc      Get All Trainings
 * @route     GET /api/v1/Trainings
 * @access    Private
 */
const getAllTrainings = getAll(Training);

/**
 * @desc      Get Training By Id
 * @route     GET /api/v1/Trainings/:TrainingId
 * @access    Private
 */
const getTraining = getOne(Training, 'user mealPlan exercises intensity');

/**
 * @desc      Create New Training
 * @route     POST /api/v1/Trainings
 * @access    Private
 */

const createTraining = createOne(Training);

/**
 * @desc      Update Training
 * @route     PATHS /api/v1/Trainings/:TrainingId
 * @access    Private
 */
const updateTraining = updateOne(Training);

/**
 * @desc      Delete Training
 * @route     DELETE /api/v1/Trainings/:TrainingId
 * @access    Private
 */
const deleteTraining = deleteOne(Training);

module.exports = {
  getAllTrainings,
  getTraining,
  createTraining,
  updateTraining,
  deleteTraining,
};
