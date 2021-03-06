const mongoose = require('mongoose');

const Role = require('../../constants/Role');
const {
  hashPassword,
  updatePasswordChangedAt,
  getOnlyActiveUsers,
} = require('./user.middleware');
const {
  signToken,
  isCorrectPassword,
  isPasswordChangedAfter,
  createPasswordResetToken,
} = require('./user.methods');
const { findByEmail } = require('./user.statics');
const sanitizeMongooseFields = require('../../utils/mongoose/sanitizeMongooseFields');
const sanitizeSpecifiedFields = require('../../utils/mongoose/sanitizeSpecifiedFields');
const Gender = require('../../constants/Gender');

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Please provide your email'],
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        'Please provide a valid email',
      ],
    },
    name: {
      type: String,
      required: [true, 'Name field is required'],
      trim: true,
    },
    gender: {
      type: String,
      enum: Object.values(Gender),
      required: [true, 'Gender field is required'],
    },
    role: {
      type: String,
      enum: Object.values(Role),
      default: Role.USER,
      required: true,
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: [8, 'Password must contain at least 8 characters'],
      maxlength: [50, 'Password must not contain more than 50 characters'],
      match: [
        /^[a-zA-Z0-9]+(?:[_-]?[a-zA-Z0-9])*$/,
        'Password can only contain letters, numbers, underscores and dashes',
      ],
      select: false,
    },
    passwordConfirm: {
      type: String,
      required: [true, 'Please provide a password confirmation'],
      minlength: [8, 'Password must contain at least 8 characters'],
      maxlength: [50, 'Password must not contain more than 50 characters'],
      match: [
        /^[a-zA-Z0-9]+(?:[_-]?[a-zA-Z0-9])*$/,
        'Password can only contain letters, numbers, underscores and dashes',
      ],
      validate: {
        // This only works on CREATE and SAVE!!!
        validator: function (el) {
          return el === this.password;
        },
        message: 'Passwords do not match',
      },
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
  }
);

// ************************ VIRTUALS ************************ //
UserSchema.virtual('trainings', {
  ref: 'Training',
  localField: '_id',
  foreignField: 'user',
  justOne: false,
});

// ******************* DOCUMENT MIDDLEWARE ****************** //
UserSchema.pre('save', hashPassword);
UserSchema.pre('save', updatePasswordChangedAt);

// ******************** QUERY MIDDLEWARE ******************* //
UserSchema.pre('findOne', getOnlyActiveUsers);

// **************** AGGREGATION MIDDLEWARE **************** //

// ******************* INSTANCE METHONDS ******************* //
UserSchema.methods.signToken = signToken;
UserSchema.methods.isCorrectPassword = isCorrectPassword;
UserSchema.methods.isPasswordChangedAfter = isPasswordChangedAfter;
UserSchema.methods.createPasswordResetToken = createPasswordResetToken;

// ******************** STATIC METHODS ******************** //
UserSchema.statics.findByEmail = findByEmail;

// ************************ PLUGINS *********************** //

UserSchema.plugin(sanitizeMongooseFields);
UserSchema.plugin(sanitizeSpecifiedFields, [
  'password',
  'passwordConfirm',
  'passwordChangedAt',
  'passwordResetToken',
  'passwordResetExpires',
  'isActive',
]);

module.exports = UserSchema;
