const mongoose = require("mongoose");
const commentSchema = require("../model/comment");

commentSchema.statics = {
  getComment: function find(query, callback) {
    this.find(query, callback);
  },

  getByEmail: function find(query, callback) {
    this.find(query, callback);
  },

  deleteComment: function deleteC(query, callback) {
    this.findOneAndDelete(query, callback);
  },

  createComment: function create(data, callback) {
    const comment = new this(data);
    comment.save(callback);
  },

  updateComment: function update(query, updateData, callback) {
    this.findOneAndUpdate(query, { $set: updateData }, { new: true }, callback);
  },
};

const commentModel = mongoose.model("Comments", commentSchema, "comments");

module.exports = commentModel;
