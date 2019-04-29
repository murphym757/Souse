"use strict";

var mongoose = require('mongoose'),
    User = mongoose.model('Users'),
    config = require('../../config'),
    jwt = require('jsonwebtoken'),
    passport = require('passport'),
    Post = mongoose.model('Posts'); // Create Post


exports.create_post = function (req, res, next) {
  var postCreatorId = req.body.postCreatorId; // This is needed to fing the postCreatorId

  User.findById(postCreatorId, function (err, user) {
    // Post Caption Upload
    if (err) throw new Error(err);
    var newPost = new Post({
      postCreator: postCreatorId,
      sousePosts: {
        postCaption: req.body.postCaption,
        postUnixTimestamp: req.body.postUnixTimestamp,
        postImageFileType: req.body.postImageFileType,
        postImageURL: req.body.postImageURL
      }
    });
    Post.create(newPost, function (err, post) {
      if (err) {
        console.log(err);
      }

      user.posts.push(newPost);
      user.save();
    });
  });
  User.findById(postCreatorId).populate({
    // Sends Data to User Database
    path: 'posts',
    model: 'Users'
  }).exec(function (err, user) {
    console.log(user.posts);
  });
}; // Get Post


exports.find_post = function (req, res, next) {
  Post.find(function (err, posts) {
    if (err) {
      console.log(err);
    } else {
      res.json(posts);
    }
  });
}; // Edit Post


exports.edit_post = function (req, res, next) {
  var postCreatorId = req.body.postCreatorId;
  var postId = req.params.id;
  Post.findById(postId, function (err, post) {
    res.json(post);
  });
}; // Update Post


exports.update_post = function (req, res, next) {
  var newerPost = {
    postCreator: req.body.postCreatorId,
    sousePosts: {
      postCaption: req.body.postCaption
    }
  };
  var updatepost = {
    "new": true
  };
  Post.findByIdAndUpdate(req.params.id, newerPost, updatepost, function (err, post) {
    if (!post) res.status(404).send("Post could not be found");else {
      post.save().then(function (post) {
        res.json('Update complete');
      })["catch"](function (err) {
        res.status(400).send("Unable to update post");
      });
    }
  });
}; // Delete Post


exports.delete_post = function (req, res, next) {
  Post.findByIdAndRemove({
    _id: req.params.id
  }, function (err, post) {
    if (err) {
      res.json(err);
    } else {
      res.json('Post ', {
        _id: req.params.id
      }, ' was successfully removed');
    }
  });
};