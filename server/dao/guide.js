const mongoose = require("mongoose");
const guideSchema = require("../model/guide");

guideSchema.statics = {
  getGuide: function find(query, callback) {
    this.find(query, callback);
  },

  getBySupplier: function find(query, callback) {
    this.find(query, callback);
  },

  getByAuthor: function find(query, callback) {
    this.find(query, callback);
  },

  deleteGuide: function deleteC(query, callback) {
    this.findOneAndDelete(query, callback);
  },

  createGuide: function create(data, callback) {
    const guide = new this(data);
    guide.save(callback);
  },

  updateGuide: function update(query, updateData, callback) {
    this.findOneAndUpdate(query, { $set: updateData }, { new: true }, callback);
  },
};

const guideModel = mongoose.model("Guides", guideSchema, "guides");
module.exports = guideModel;
