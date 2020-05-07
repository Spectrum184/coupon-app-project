const mongoose = require("mongoose");
const couponSchema = require("../model/coupon");

couponSchema.statics = {
  getCoupon: function find(query, callback) {
    this.find(query, callback);
  },

  getBySupplier: function find(query, callback) {
    this.find(query, callback);
  },

  getByCategory: function find(query, callback) {
    this.find(query, callback);
  },

  deleteCoupon: function deleteC(query, callback) {
    this.findOneAndDelete(query, callback);
  },

  createCoupon: function create(data, callback) {
    const coupon = new this(data);
    coupon.save(callback);
  },

  updateCoupon: function update(query, updateData, callback) {
    this.findOneAndUpdate(query, { $set: updateData }, { new: true }, callback);
  },
};

const couponModel = mongoose.model("Coupon", couponSchema, "coupons");

module.exports = couponModel;
