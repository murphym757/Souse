"use strict";

var mongoose = require('mongoose'),
    User = mongoose.model('Users'),
    Post = mongoose.model('Posts'),
    Comment = mongoose.model('Comments'),
    config = require('../../config'),
    jwt = require('jsonwebtoken'),
    passport = require('passport'); // Create Comment


exports.create_comment = function (req, res, next) {
  var originalPostId = req.body.originalPostId; // This is needed to fing the postId

  var commentCreatorId = req.body.commentCreatorId;
  Post.findById(originalPostId, function (err, post) {
    // Post Caption Upload
    if (err) throw new Error(err);
    User.findById(commentCreatorId, function (err, user) {
      // Post Caption Upload
      if (err) throw new Error(err);
      var newComment = new Comment({
        commentCreatorId: commentCreatorId,
        souseComment: req.body.souseComment,
        originalPostId: originalPostId
      });
      Comment.create(newComment, function (err, comment) {
        if (err) {
          console.log(err);
        }

        user.comments.push(newComment);
        user.save();
        post.comments.push(newComment);
        post.save();
      });
    });
  });
}; // Get Comment


exports.find_comment = function (req, res, next) {
  Comment.find(function (err, comments) {
    if (err) {
      console.log(err);
    } else {
      res.json(comments);
    }
  }).sort({
    commentCreatedDate: 'descending'
  });
}; // Delete Post


exports.delete_comment = function (req, res, next) {
  Comment.findByIdAndRemove({
    _id: req.params.id
  }, function (err, post) {
    if (err) {
      res.json(err);
    } else {
      res.json('Comment ', {
        _id: req.params.id
      }, ' was successfully removed');
    }
  });
};