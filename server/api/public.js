const express = require("express");
const Coupons = require("../controller/coupon");
const Comment = require("../controller/comment");
const Review = require("../controller/review");
const Guide = require("../controller/guide");

const route = express.Router();

route.get("/coupon", Coupons.getCoupons);
route.get("/coupon/supplier/:supplier", Coupons.getCouponBySupplier);
route.get("/coupon/category/:category", Coupons.getCouponByCategory);

route.get("/comment", Comment.getComments);
route.get("/comment/email/:email", Comment.getCommentByEmail);

route.get("/review", Review.getReview);
route.get("/review/category/:category", Review.getReviewByCategory);
route.get("/review/author/:author", Review.getReviewByAuthor);

route.get("/guide", Guide.getGuide);
route.get("/guide/supplier/:supplier", Guide.getGuideBySupplier);
route.get("/guide/author/:author", Guide.getGuideByAuthor);

module.exports = route;
