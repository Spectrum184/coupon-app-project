const mongoose = require("mongoose");
const reviewSchema = require("../model/review");

reviewSchema.statics = {
  getReview: function find(query, callback) {
    this.find(query, callback);
  },

  getByCategory: function find(query, callback) {
    this.find(query, callback);
  },

  getByAuthor: function find(query, callback) {
    this.find(query, callback);
  },

  deleteReview: function deleteC(query, callback) {
    this.findOneAndDelete(query, callback);
  },

  createReview: function create(data, callback) {
    const review = new this(data);
    review.save(callback);
  },

  updateReview: function update(query, updateData, callback) {
    this.findOneAndUpdate(query, { $set: updateData }, { new: true }, callback);
  },
};

const reviewModel = mongoose.model("Reviews", reviewSchema, "reviews");
module.exports = reviewModel;
