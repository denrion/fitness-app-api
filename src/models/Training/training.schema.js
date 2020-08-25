const mongoose = require('mongoose');

const sanitizeMongooseFields = require('../../utils/mongoose/sanitizeMongooseFields');
const { populateDataOnFind } = require('./training.middleware');

const TrainingSchema = new mongoose.Schema(
  {
    color: { type: String, required: [true, 'Color is required '] },
    date: {
      type: Date,
      required: [true, 'Date is required'],
    },
    isDone: {
      type: Boolean,
      default: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    mealPlan: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'MealPlan',
      required: true,
    },
    intensity: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Intensity',
      required: true,
    },
    exercises: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exercise',
        required: true,
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
TrainingSchema.pre(/find/, populateDataOnFind);

// **************** AGGREGATION MIDDLEWARE **************** //

// ******************* INSTANCE METHONDS ******************* //

// ******************** STATIC METHODS ******************** //

// ************************ PLUGINS *********************** //

TrainingSchema.plugin(sanitizeMongooseFields);

module.exports = TrainingSchema;
