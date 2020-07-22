/* eslint-disable no-unused-vars */
const {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
} = require('./handlerFactory');
const Meal = require('../models/Meal/meal.model');

/**
 * @desc      Get All Meals
 * @route     GET /api/v1/Meals
 * @access    Private
 */
const getAllMeals = getAll(Meal);

/**
 * @desc      Get Meal By Id
 * @route     GET /api/v1/Meals/:MealId
 * @access    Private
 */
const getMeal = getOne(Meal);

/**
 * @desc      Create New Meal
 * @route     POST /api/v1/Meals
 * @access    Private
 */
const createMeal = createOne(Meal);

/**
 * @desc      Update Meal
 * @route     PATHS /api/v1/Meals/:MealId
 * @access    Private
 */
const updateMeal = updateOne(Meal);

/**
 * @desc      Delete Meal
 * @route     DELETE /api/v1/Meals/:MealId
 * @access    Private
 */
const deleteMeal = deleteOne(Meal);

module.exports = {
  getAllMeals,
  getMeal,
  createMeal,
  updateMeal,
  deleteMeal,
};
