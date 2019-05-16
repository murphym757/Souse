"use strict";

var mongoose = require('mongoose'),
    User = mongoose.model('Users'),
    Post = mongoose.model('Posts'),
    Comment = mongoose.model('Comments'),
    config = require('../../config'),
    jwt = require('jsonwebtoken'),
    passport = require('passport'); // Create Comment


exports.create_comment = function (req, res, next) {
  var postId = req.params.id; // This is needed to fing the postId

  var postCreatorId = req.params.postCreatorId;
  var commentCreator = req.body.commentCreator;
  User.findById(postCreatorId, function (err, user) {
    // Post Caption Upload
    if (err) throw new Error(err);
    Post.findById(postId, function (err, post) {
      var newComment = new Comment({
        commentCreator: commentCreator,
        souseComment: req.body.souseComment
      });
      Comment.create(newComment, function (err, comment) {
        if (err) {
          console.log(err);
        }

        user.comment.push(newComment);
        user.save();
      });
    });
  });
  User.findById(commentCreator).populate({
    // Sends Data to User Database
    path: 'comments',
    model: 'Users'
  }).exec(function (err, user) {
    console.log(user.comments);
  });
}; // Get Post


exports.find_post = function (req, res, next) {
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