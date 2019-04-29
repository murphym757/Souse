"use strict";

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    "default": ''
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    "default": ''
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    "default": ''
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    "default": ''
  },
  password: {
    type: String,
    required: true,
    "default": ''
  },
  isDeleted: {
    type: Boolean,
    "default": false
  },
  avatar: {
    type: String
  },
  signUpDate: {
    type: Date,
    "default": Date.now()
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    //Returns the entire post
    ref: 'Posts'
  }]
});
var PostSchema = new mongoose.Schema({
  postCreator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'
  },
  sousePosts: {
    postCaption: {
      type: String,
      trim: true,
      "default": ''
    },
    postCreatedDate: {
      type: Date,
      "default": Date.now()
    },
    postUnixTimestamp: {
      type: String,
      trim: true,
      "default": ''
    },
    postImageFileType: {
      type: String,
      trim: true,
      "default": ''
    },
    postImageURL: {
      type: String,
      trim: true,
      "default": ''
    }
  }
});
var User = mongoose.model('Users', UserSchema);
var Post = mongoose.model('Posts', PostSchema);
module.exports = {
  User: User,
  Post: Post
};