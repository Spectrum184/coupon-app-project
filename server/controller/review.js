const Review = require("../dao/review");

module.exports.getReview = function (req, res) {
  Review.getReview({}, function (err, reviews) {
    if (err) {
      res.json({ error: err });
    }
    res.json({ reviews });
  });
};

module.exports.getReviewByCategory = function (req, res) {
  Review.getByCategory({ category: req.params.category }, function (
    err,
    reviews,
  ) {
    if (err) {
      res.json({ error: err });
    }
    res.json({ reviews });
  });
};

module.exports.getReviewByAuthor = function (req, res) {
  Review.getByAuthor({ author: req.params.author }, function (err, reviews) {
    if (err) {
      res.json({ error: err });
    }
    res.json({ reviews });
  });
};

module.exports.deleteOneReview = function (req, res) {
  Review.deleteReview({ _id: req.params.id }, function (err, result) {
    if (err) {
      res.json({ error: err });
    }
    res.json({ message: "Delete review successfully" });
  });
};

module.exports.createReview = function (req, res) {
  const review = {
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    category: req.body.category,
    supplier: req.body.supplier ? req.body.supplier : "",
    date: req.body.date,
  };

  Review.createReview(review, function (err, result) {
    if (err) {
      res.json({
        error: err,
      });
    }
    res.json({
      message: "Review created successfully",
    });
  });
};

module.exports.updateReview = function (req, res) {
  const review = {
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    category: req.body.category,
    supplier: req.body.supplier ? req.body.supplier : "",
    date: req.body.date,
  };

  Review.updateReview({ _id: req.params.id }, review, function (err, result) {
    if (err) {
      res.json({ error: err });
    }
    res.json({ message: "Update review succeeded" });
  });
};
