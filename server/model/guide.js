const mongoose = require("mongoose");

const { Schema } = mongoose;

const guideSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },

  content: {
    type: String,
    required: true,
  },

  author: {
    type: String,
    required: true,
  },

  supplier: {
    type: String,
    required: true,
  },
});

module.exports = guideSchema;
