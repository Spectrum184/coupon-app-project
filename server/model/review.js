const mongoose = require("mongoose");

const { Schema } = mongoose;

const reviewSchema = new Schema({
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

  category: {
    type: String,
    required: true,
  },

  supplier: {
    type: String,
  },

  date: {
    type: String,
    required: true,
  },
});

module.exports = reviewSchema;
