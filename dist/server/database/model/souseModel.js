"use strict";

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    "default": null
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    "default": null
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    "default": null
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    "default": null
  },
  password: {
    type: String,
    required: true,
    "default": null
  },
  isDeleted: {
    type: Boolean,
    "default": false
  },
  userImage: {
    type: String,
    "default": null
  },
  userBio: {
    type: String,
    "default": null
  },
  userLocation: {
    type: String,
    "default": null
  },
  userInstagram: {
    type: String,
    "default": null
  },
  userFacebook: {
    type: String,
    "default": null
  },
  userTwitter: {
    type: String,
    "default": null
  },
  signUpDate: {
    type: Date,
    "default": Date.now
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    //Returns the entire post
    ref: 'Posts'
  }],
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comments'
  }],
  followers: [{
    type: mongoose.Schema.Types.Mixed,
    ref: 'Followers'
  }],
  follows: [{
    type: mongoose.Schema.Types.Mixed,
    ref: 'Follows'
  }]
});
var PostSchema = new mongoose.Schema({
  postCreator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'
  },
  postCreatedDate: {
    type: Date,
    "default": Date
  },
  postUpdateDate: {
    type: Date,
    "default": Date.now
  },
  sousePosts: {
    postCaption: {
      type: String,
      trim: true,
      "default": null
    },
    postUnixTimestamp: {
      type: String,
      trim: true,
      "default": null
    },
    postImageFileType: {
      type: String,
      trim: true,
      "default": null
    },
    postImageFileName: {
      type: String,
      trim: true,
      "default": null
    },
    postImageURL: {
      type: String,
      trim: true,
      "default": null
    }
  },
  comments: [{
    type: mongoose.Schema.Types.Mixed,
    ref: 'Comments'
  }]
});
var CommentSchema = new mongoose.Schema({
  commentCreatorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'
  },
  commentCreatedDate: {
    type: Date,
    "default": Date.now
  },
  souseComment: {
    type: String,
    trim: true,
    "default": null
  },
  originalPostId: {
    type: String,
    trim: true,
    "default": null
  },
  commentCreatorUsername: {
    type: String,
    trim: true,
    "default": null
  }
});
var FollowerSchema = new mongoose.Schema({
  followerUserId: {
    type: String,
    trim: true,
    "default": null
  },
  receivedFollowUserId: {
    type: String,
    trim: true,
    "default": null
  },
  followedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'
  },
  followedDate: {
    type: Date,
    "default": Date.now
  }
});
var FollowSchema = new mongoose.Schema({
  followUserId: {
    type: String,
    trim: true,
    "default": null
  },
  initiatedFollowuserId: {
    type: String,
    trim: true,
    "default": null
  },
  follows: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'
  },
  followedDate: {
    type: Date,
    "default": Date.now
  }
});
var User = mongoose.model('Users', UserSchema);
var Post = mongoose.model('Posts', PostSchema);
var Comment = mongoose.model('Comments', CommentSchema);
var Follower = mongoose.model('Followers', FollowerSchema);
var Follow = mongoose.model('Follows', FollowSchema);
module.exports = {
  User: User,
  Post: Post,
  Comment: Comment,
  Follower: Follower,
  Follow: Follow
};