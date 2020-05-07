const mongoose = require("mongoose");

const { Schema } = mongoose;

const couponSchema = new Schema({
  supplier: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  dateExpired: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

module.exports = couponSchema;
