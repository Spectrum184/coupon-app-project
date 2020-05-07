const Comment = require("../dao/comment");

module.exports.getComments = function (req, res) {
  Comment.getComment({}, function (err, comments) {
    if (err) {
      res.json({ error: err });
    }
    res.json({ comments });
  });
};

module.exports.getCommentByEmail = function (req, res) {
  Comment.getByEmail({ email: req.params.email }, function (err, comments) {
    if (err) {
      res.json({ error: err });
    }
    res.json({ comments });
  });
};

module.exports.deleteOneComment = function (req, res) {
  Comment.deleteComment({ _id: req.params.id }, function (err, result) {
    if (err) {
      res.json({ error: err });
    }
    res.json({ message: "Delete comment successfully" });
  });
};

module.exports.createComment = function (req, res) {
  const comment = {
    author: req.body.author,
    email: req.body.email,
    date: req.body.date,
    content: req.body.content,
  };

  Comment.createComment(comment, function (err, result) {
    if (err) {
      res.json({
        error: err,
      });
    }
    res.json({
      message: "Comment created successfully",
    });
  });
};

module.exports.updateComment = function (req, res) {
  const comment = {
    author: req.body.author,
    email: req.body.email,
    date: req.body.date,
    content: req.body.content,
  };

  Comment.updateComment({ _id: req.params.id }, comment, function (
    err,
    result,
  ) {
    if (err) {
      res.json({ error: err });
    }
    res.json({ message: "Update comment succeeded" });
  });
};
