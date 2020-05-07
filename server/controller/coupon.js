const Coupon = require("../dao/coupon");

module.exports.getCoupons = function (req, res) {
  Coupon.getCoupon({}, function (err, coupons) {
    if (err) {
      res.json({ error: err });
    }
    res.json({ coupons });
  });
};

module.exports.getCouponBySupplier = function (req, res) {
  Coupon.getBySupplier({ supplier: req.params.supplier }, function (
    err,
    coupons,
  ) {
    if (err) {
      res.json({ error: err });
    }
    res.json({ coupons });
  });
};

module.exports.getCouponByCategory = function (req, res) {
  Coupon.getByCategory({ category: req.params.category }, function (
    err,
    coupons,
  ) {
    if (err) {
      res.json({ error: err });
    }
    res.json({ coupons });
  });
};

module.exports.deleteOneCoupon = function (req, res) {
  Coupon.deleteCoupon({ _id: req.params.id }, function (err, result) {
    if (err) {
      res.json({ error: err });
    }
    res.json({ message: "Delete coupon successfully" });
  });
};

module.exports.createCoupon = function (req, res) {
  const coupon = {
    supplier: req.body.supplier,
    code: req.body.code,
    dateExpired: req.body.dateExpired,
    description: req.body.description,
    category: req.body.category,
    value: req.body.value,
  };

  Coupon.createCoupon(coupon, function (err, result) {
    if (err) {
      res.json({
        error: err,
      });
    }
    res.json({
      message: "Hero created successfully",
    });
  });
};

module.exports.updateCoupon = function (req, res) {
  const coupon = {
    supplier: req.body.supplier,
    code: req.body.code,
    dateExpired: req.body.dateExpired,
    description: req.body.description,
    category: req.body.category,
    value: req.body.value,
  };

  Coupon.updateCoupon({ _id: req.params.id }, coupon, function (err, result) {
    if (err) {
      res.json({ error: err });
    }
    res.json({ message: "Update coupon succeeded" });
  });
};
