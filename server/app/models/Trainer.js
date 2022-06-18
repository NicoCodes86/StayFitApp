const mongoose = require('mongoose');
const User = require('./User');
const Exercise = require('./Exercise'); 
const { Schema } = require('mongoose');
const Joi = require('joi'); 

  var trainerSchema = new Schema(
    {
      firstName: {type: String, required: true},
      lastName: {type: String, required: true},
      userName: {type: String, required: true, unique: true},
      password: {type: String, required: true},
      credentials: String,
      imageUrl: String,
      clients: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      }],
      exercises: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exercise',
      }],
    },
    { timestamps: true }
  );

module.exports = mongoose.model("trainer", trainerSchema);
