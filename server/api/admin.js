const express = require("express");
const Coupons = require("../controller/coupon");
const Comment = require("../controller/comment");
const Review = require("../controller/review");
const Guide = require("../controller/guide");

const route = express.Router();

route.get("/coupon", Coupons.getCoupons);
route.get("/coupon/supplier/:supplier", Coupons.getCouponBySupplier);
route.get("/coupon/category/:category", Coupons.getCouponByCategory);
route.delete("/coupon/:id", Coupons.deleteOneCoupon);
route.post("/coupon/add", Coupons.createCoupon);
route.put("/coupon/update/:id", Coupons.updateCoupon);

route.get("/comment", Comment.getComments);
route.get("/comment/email/:email", Comment.getCommentByEmail);
route.delete("/comment/:id", Comment.deleteOneComment);
route.post("/comment/add", Comment.createComment);
route.put("/comment/update/:id", Comment.updateComment);

route.get("/review", Review.getReview);
route.get("/review/category/:category", Review.getReviewByCategory);
route.get("/review/author/:author", Review.getReviewByAuthor);
route.delete("/review/:id", Review.deleteOneReview);
route.post("/review/add", Review.createReview);
route.put("/review/update/:id", Review.updateReview);

route.get("/guide", Guide.getGuide);
route.get("/guide/supplier/:supplier", Guide.getGuideBySupplier);
route.get("/guide/author/:author", Guide.getGuideByAuthor);
route.delete("/guide/:id", Guide.deleteOneGuide);
route.post("/guide/add", Guide.createGuide);
route.put("/guide/update/:id", Guide.updateGuide);

module.exports = route;
