const express = require('express');
const {
  getAllMealPlans,
  getMealPlan,
  createMealPlan,
  updateMealPlan,
  deleteMealPlan,
} = require('../controllers/mealPlanController');
const Role = require('../constants/Role');
const isAuth = require('../middleware/isAuth');
const restrictTo = require('../middleware/restrictTo');

const router = express.Router();

// Routes below will go through both isAuth & restrictTo middleware first
router.use(isAuth, restrictTo(Role.ADMIN));

router.route('/').get(getAllMealPlans).post(createMealPlan);
router
  .route('/:id')
  .get(getMealPlan)
  .patch(updateMealPlan)
  .delete(deleteMealPlan);

module.exports = router;
