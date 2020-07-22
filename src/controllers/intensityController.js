/* eslint-disable no-unused-vars */
const Intensity = require('../models/Intensity/intensity.model');
const {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
} = require('./handlerFactory');

/**
 * @desc      Get All Intensities
 * @route     GET /api/v1/Intensities
 * @access    Private
 */
const getAllIntensities = getAll(Intensity);

/**
 * @desc      Get Intensity By Id
 * @route     GET /api/v1/Intensities/:IntensityId
 * @access    Private
 */
const getIntensity = getOne(Intensity);

/**
 * @desc      Create New Intensity
 * @route     POST /api/v1/Intensities
 * @access    Private
 */
const createIntensity = createOne(Intensity);

/**
 * @desc      Update Intensity
 * @route     PATHS /api/v1/Intensities/:IntensityId
 * @access    Private
 */
const updateIntensity = updateOne(Intensity);

/**
 * @desc      Delete Intensity
 * @route     DELETE /api/v1/Intensities/:IntensityId
 * @access    Private
 */
const deleteIntensity = deleteOne(Intensity);

module.exports = {
  getAllIntensities,
  getIntensity,
  createIntensity,
  updateIntensity,
  deleteIntensity,
};
