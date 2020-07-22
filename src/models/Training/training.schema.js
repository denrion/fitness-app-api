const mongoose = require('mongoose');
const sanitizeMongooseFields = require('../../utils/mongoose/sanitizeMongooseFields');

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
    },
    mealPlan: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'MealPlan',
    },
    exercises: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exercise',
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
TrainingSchema.pre(/find/, function (next) {
  this.populate('user');
  next();
});

// **************** AGGREGATION MIDDLEWARE **************** //

// ******************* INSTANCE METHONDS ******************* //

// ******************** STATIC METHODS ******************** //

// ************************ PLUGINS *********************** //

TrainingSchema.plugin(sanitizeMongooseFields);

module.exports = TrainingSchema;
