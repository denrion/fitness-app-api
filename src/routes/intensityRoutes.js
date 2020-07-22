const express = require('express');

const {
  getAllIntensities,
  getIntensity,
  createIntensity,
  updateIntensity,
  deleteIntensity,
} = require('../controllers/intensityController');
const Role = require('../constants/Role');
const isAuth = require('../middleware/isAuth');
const restrictTo = require('../middleware/restrictTo');

const router = express.Router();

// Routes below will go through both isAuth & restrictTo middleware first
router.use(isAuth, restrictTo(Role.ADMIN));

router.route('/').get(getAllIntensities).post(createIntensity);
router
  .route('/:id')
  .get(getIntensity)
  .patch(updateIntensity)
  .delete(deleteIntensity);

module.exports = router;
