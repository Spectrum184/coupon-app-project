const Guide = require("../dao/guide");

module.exports.getGuide = function (req, res) {
  Guide.getGuide({}, function (err, guides) {
    if (err) {
      res.json({ error: err });
    }
    res.json({ guides });
  });
};

module.exports.getGuideBySupplier = function (req, res) {
  Guide.getBySupplier({ supplier: req.params.supplier }, function (
    err,
    guides,
  ) {
    if (err) {
      res.json({ error: err });
    }
    res.json({ guides });
  });
};

module.exports.getGuideByAuthor = function (req, res) {
  Guide.getByAuthor({ author: req.params.author }, function (err, guides) {
    if (err) {
      res.json({ error: err });
    }
    res.json({ guides });
  });
};

module.exports.deleteOneGuide = function (req, res) {
  Guide.deleteGuide({ _id: req.params.id }, function (err, result) {
    if (err) {
      res.json({ error: err });
    }
    res.json({ message: "Delete guide successfully" });
  });
};

module.exports.createGuide = function (req, res) {
  const guide = {
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    supplier: req.body.supplier,
  };

  Guide.createGuide(guide, function (err, result) {
    if (err) {
      res.json({
        error: err,
      });
    }
    res.json({
      message: "Guide created successfully",
    });
  });
};

module.exports.updateGuide = function (req, res) {
  const guide = {
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    supplier: req.body.supplier,
  };

  Guide.updateGuide({ _id: req.params.id }, guide, function (err, result) {
    if (err) {
      res.json({ error: err });
    }
    res.json({ message: "Update guide succeeded" });
  });
};
