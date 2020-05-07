const mongoose = require("mongoose");

const { Schema } = mongoose;

const commentSchema = new Schema({
  author: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    required: true,
  },

  content: {
    type: String,
    required: true,
  },
});

module.exports = commentSchema;
