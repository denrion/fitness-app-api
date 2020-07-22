/* eslint-disable no-unused-vars */
const {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
} = require('./handlerFactory');
const MealPlan = require('../models/MealPlan/mealPlan.model');

/**
 * @desc      Get All MealPlans
 * @route     GET /api/v1/MealPlans
 * @access    Private
 */
const getAllMealPlans = getAll(MealPlan);

/**
 * @desc      Get MealPlan By Id
 * @route     GET /api/v1/MealPlans/:MealPlanId
 * @access    Private
 */
const getMealPlan = getOne(MealPlan);

/**
 * @desc      Create New MealPlan
 * @route     POST /api/v1/MealPlans
 * @access    Private
 */
const createMealPlan = createOne(MealPlan);

/**
 * @desc      Update MealPlan
 * @route     PATHS /api/v1/MealPlans/:MealPlanId
 * @access    Private
 */
const updateMealPlan = updateOne(MealPlan);

/**
 * @desc      Delete MealPlan
 * @route     DELETE /api/v1/MealPlans/:MealPlanId
 * @access    Private
 */
const deleteMealPlan = deleteOne(MealPlan);

module.exports = {
  getAllMealPlans,
  getMealPlan,
  createMealPlan,
  updateMealPlan,
  deleteMealPlan,
};
