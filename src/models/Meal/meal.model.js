const { model } = require('mongoose');
const MealSchema = require('./meal.schema');

const Meal = model('Meal', MealSchema);

module.exports = Meal;
