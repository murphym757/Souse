"use strict";

var mongoose = require('mongoose'),
    User = mongoose.model('Users'),
    config = require('../../config'),
    jwt = require('jsonwebtoken'),
    passport = require('passport'),
    aws = require('aws-sdk'),
    multer = require('multer'),
    multerS3 = require('multer-s3'),
    path = require('path'),
    Post = mongoose.model('Posts'),
    Comment = mongoose.model('Comments'); // Create Post


exports.create_post = function (req, res, next) {
  var postCreator = req.params.postCreator; // This is needed to find the postCreatorId

  User.findById(postCreator, function (err, user) {
    // Post Caption Upload
    if (err) throw new Error(err);
    var newPost = new Post({
      postCreator: postCreator,
      sousePosts: {
        postCaption: req.body.postCaption,
        postLocation: req.body.postLocation,
        postUnixTimestamp: req.body.postUnixTimestamp,
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
  User.findById(postCreator).populate({
    // Sends Data to User Database
    path: 'posts',
    model: 'Users'
  }).exec(function (err, user) {});
}; // Upload Image


exports.upload_post_image = function (req, res, next) {
  var postId = req.params.id;
  var postCreator = req.params.postCreator;
  var postUnixTimestamp = req.params.postUnixTimestamp;
  Post.findById(postId, function (err, post) {
    aws.config.update({
      accessKeyId: config.AWS_ACCESS_KEY_ID,
      secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
      region: config.AWS_REGION
    });
    var s3 = new aws.S3();

    var fileFilter = function fileFilter(req, file, cb) {
      if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/gif') {
        cb(null, true);
      } else {
        cb(new Error('Invalid Mime Type, only JPEG/JPG, PNG, ang GIF'), false);
      }
    };

    var userImageUpload = multer({
      fileFilter: fileFilter,
      storage: multerS3({
        s3: s3,
        bucket: config.AWS_BUCKET_NAME,
        acl: 'public-read',
        serverSideEncryption: 'AES256',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        metadata: function metadata(req, file, cb) {
          var extname = path.extname(file.originalname).toLowerCase();
          cb(null, {
            fieldName: "This image: " + postId + extname + " was uploaded to Souse"
          });
        },
        key: function key(req, file, cb) {
          var filetypes = /jpeg|jpg|png|gif/;
          var extname = path.extname(file.originalname).toLowerCase();
          console.log(extname);
          var extNameTest = filetypes.test(path.extname(file.originalname).toLowerCase());
          var mimeTypeTest = filetypes.test(file.mimetype);
          var newFileName = Date.now().toString();
          var fullPath = 'users/' + "" + postCreator + "" + '/posts/' + postUnixTimestamp + '/' + postCreator + extname;

          if (mimeTypeTest && extNameTest) {
            return cb(null, fullPath);
          } else {
            cb('Error: Images Only!');
          }
        }
      })
    });
    var singleUpload = userImageUpload.single('image');
    singleUpload(req, res, function (err) {
      if (err) res.json(err);else res.json({
        'imageName': req.file.key,
        'imageUrl': req.file.location
      });
    });
  });
}; // Delete User's Image


exports.delete_post_image = function (req, res, next) {
  var postId = req.params.id;
  var postCreator = req.params.postCreator;
  var postUnixTimestamp = req.params.postUnixTimestamp;
  Post.findById(postId, function (err, post) {
    var awsBucketName = config.AWS_BUCKET_NAME;
    var s3bucket = new aws.S3({
      accessKeyId: config.AWS_ACCESS_KEY_ID,
      secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
      region: config.AWS_REGION
    });
    var params = {
      Bucket: awsBucketName,
      Prefix: 'users/' + "" + postCreator + "" + '/posts/' + postUnixTimestamp + '/'
    };
    s3bucket.listObjects(params, function (err, data, cb) {
      if (err) ;
      if (data.Contents.length == 0) ;
      params = {
        Bucket: config.AWS_BUCKET_NAME
      };
      params.Delete = {
        Objects: []
      };
      data.Contents.forEach(function (content) {
        params.Delete.Objects.push({
          Key: content.Key
        });
      });
      s3bucket.deleteObjects(params, function (err, data, cb) {
        if (err) {
          console.log(err);
        } else {}
      });
    });
  });
}; // Get Post


exports.find_post = function (req, res, next) {
  Post.find(function (err, posts) {
    if (err) {
      console.log(err);
    } else {
      res.json(posts);
    }
  }).sort({
    postCreatedDate: 'descending'
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
      postCaption: req.body.postCaption,
      postLocation: req.body.postLocation,
      postUnixTimestamp: req.body.postUnixTimestamp,
      postImageURL: req.body.postImageURL
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