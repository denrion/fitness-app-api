const mongoose = require('mongoose');
const sanitizeMongooseFields = require('../../utils/mongoose/sanitizeMongooseFields');

const TrainingSchema = new mongoose.Schema(
  {
    color: { type: String, required: [true, 'Color is required '] },
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    date: {
      type: Date,
      required: [true, 'Date is required'],
    },
    exercises: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Execise',
      },
    ],
    mealPlans: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MealPlan',
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

TrainingSchema.plugin(sanitizeMongooseFields);

module.exports = TrainingSchema;
