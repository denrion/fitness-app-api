const mongoose = require('mongoose');
const sanitizeMongooseFields = require('../../utils/mongoose/sanitizeMongooseFields');

const MealPlanSchema = new mongoose.Schema(
  {
    calories: {
      type: Number,
      required: [true, 'Calories field is required'],
    },
    carbonhydrates: {
      type: Number,
      required: [true, 'Carbonhydrates field is required'],
    },
    fat: {
      type: Number,
      required: [true, 'Fat field is required'],
    },
    protein: {
      type: Number,
      required: [true, 'Protein field is required'],
    },
    title: {
      type: String,
      required: [true, 'Title field is required'],
    },
    meals: [
      {
        type: MealPlanSchema,
        required: [true, 'Meals are required'],
      },
    ],
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
  }
);

// ************************ VIRTUALS ************************ //

// ******************* DOCUMENT MIDDLEWARE ****************** //

// ******************** QUERY MIDDLEWARE ******************* //

// **************** AGGREGATION MIDDLEWARE **************** //

// ******************* INSTANCE METHONDS ******************* //

// ******************** STATIC METHODS ******************** //

// ************************ PLUGINS *********************** //

MealPlanSchema.plugin(sanitizeMongooseFields);

module.exports = MealPlanSchema;
