const mongoose = require('mongoose');
const sanitizeMongooseFields = require('../../utils/mongoose/sanitizeMongooseFields');

const IntensitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name field is required'],
      trim: true,
    },
    color: {
      type: String,
      required: [true, 'Color field is required'],
      trim: true,
    },
    repetitions: {
      type: Number,
      required: [true, 'Repetitions field is required'],
    },
    sets: {
      type: Number,
      required: [true, 'Sets field is required'],
    },
    break: {
      type: Number,
      required: [true, 'Break field is required'],
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

IntensitySchema.plugin(sanitizeMongooseFields);

module.exports = IntensitySchema;
