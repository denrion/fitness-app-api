const mongoose = require('mongoose');
const sanitizeMongooseFields = require('../../utils/mongoose/sanitizeMongooseFields');

const MealSchema = new mongoose.Schema(
  {
    imageURL: {
      type: String,
      required: [true, 'ImageURL is required'],
    },
    readyInMinutes: {
      type: Number,
      required: [true, 'ReadyInMinutes is required'],
    },
    servings: {
      type: Number,
      required: [true, 'Servings is required'],
    },
    sourceURL: {
      type: String,
      required: [true, 'SourceURL is required'],
    },
    title: {
      type: String,
      required: [[true, 'Title is required']],
    },
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

MealSchema.plugin(sanitizeMongooseFields);

module.exports = MealSchema;
