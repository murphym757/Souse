"use strict";

var mongoose = require('mongoose'),
    User = mongoose.model('Users'),
    Post = mongoose.model('Posts'),
    Comment = mongoose.model('Comments'),
    Follow = mongoose.model('Follows'),
    Follower = mongoose.model('Followers'),
    bcrypt = require('bcryptjs'),
    jwt = require('jsonwebtoken'),
    passport = require('passport'),
    validateRegisterInput = require('../../validation/register'),
    validateLoginInput = require('../../validation/login');

exports.register_user = function (req, res, next) {
  var _validateRegisterInpu = validateRegisterInput(req.body),
      errors = _validateRegisterInpu.errors,
      isValid = _validateRegisterInpu.isValid;

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({
    email: req.body.email
  }) // Check to see if email is already in DB
  .then(function (user) {
    if (user) {
      // If matching email found, return error stating email already exist
      return res.status(400).json({
        email: 'Email already exists'
      });
    } else {
      // If no matching email, user is allowed to create an account
      var newUser = new User({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
      });
      bcrypt.genSalt(10, function (err, salt) {
        // Password field
        if (err) console.error('There was an error', err);else {
          bcrypt.hash(newUser.password, salt, function (err, hash) {
            if (err) console.error('There was an error', err);else {
              newUser.password = hash;
              newUser.save().then(function (user) {
                res.json(user);
              });
            }
          });
        }
      });
    }
  });
};

exports.login_user = function (req, res, next) {
  var _validateLoginInput = validateLoginInput(req.body),
      errors = _validateLoginInput.errors,
      isValid = _validateLoginInput.isValid;

  if (!isValid) {
    return res.status(400).json(errors);
  }

  var email = req.body.email;
  var password = req.body.password;
  User.findOne({
    email: email
  }) // Check to see if email is already in DB
  .then(function (user) {
    if (!user) {
      // If email not found, return error stating so
      errors.email = 'User not found';
      return res.status(404).json(errors);
    }

    bcrypt.compare(password, user.password).then(function (isMatch) {
      if (isMatch) {
        var payload = {
          id: user.id,
          username: user.username,
          userImage: user.userImage,
          userTheme: user.userTheme,
          userThemeType: user.userThemeType
        };
        jwt.sign(payload, 'secret', {
          expiresIn: 3600
        }, function (err, token) {
          if (err) console.error('There is some error in token', err);else {
            res.json({
              success: true,
              token: "Bearer ".concat(token)
            });
          }
        });
      } else {
        errors.password = 'Incorrect Password';
        return res.status(400).json(errors);
      }
    });
  });
}; // Get User


exports.find_user = function (req, res, next) {
  User.find(function (err, users) {
    if (err) {
      console.log(err);
    } else {
      res.json(users);
    }
  });
}; // Edit User


exports.edit_user = function (req, res, next) {
  var userId = req.params.id;
  User.findById(userId, function (err, user) {
    res.json(user);
  });
}; // Update User (User Chooses To Not Change Password)


exports.update_user_nopassword = function (req, res, next) {
  var newerUser = {
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    userImage: req.body.userImage,
    userTheme: req.body.userTheme,
    userThemeType: req.body.userThemeType,
    userInstagram: req.body.userInstagram,
    userFacebook: req.body.userFacebook,
    userTwitter: req.body.userTwitter,
    userLocation: req.body.userLocation,
    userBio: req.body.userBio
  };
  var updateuser = {
    "new": true
  };
  User.findByIdAndUpdate(req.params.id, newerUser, updateuser, function (err, user) {
    if (!user) res.status(404).send("User could not be found");else {
      user.save().then(function (user) {
        res.json('Update complete');
      })["catch"](function (err) {
        res.status(400).send("Unable to update user");
      });
    }
  });
}; // Update User (User Inputs Password)


exports.update_user = function (req, res, next) {
  var newerUser = {
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    confirmedNewPassword: req.body.confirmedNewPassword,
    userImage: req.body.userImage,
    userTheme: req.body.userTheme,
    userThemeType: req.body.userThemeType,
    userInstagram: req.body.userInstagram,
    userFacebook: req.body.userFacebook,
    userTwitter: req.body.userTwitter,
    userLocation: req.body.userLocation,
    userBio: req.body.userBio
  };
  var updateuser = {
    "new": true
  };
  User.findByIdAndUpdate(req.params.id, newerUser, updateuser, function (err, user) {
    if (!user) res.status(404).send("User could not be found");else {
      bcrypt.genSalt(10, function (err, salt) {
        // Password field
        if (err) console.error('There was an error', err);else {
          bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) console.error('There was an error', err);else {
              user.password = hash;
              user.save().then(function (user) {
                res.json('Update complete');
              })["catch"](function (err) {
                res.status(400).send("Unable to update user");
              });
            }
          });
        }
      });
    }
  });
}; // Delete User


exports.delete_user = function (req, res, next) {
  User.findByIdAndRemove({
    _id: req.params.id
  }, function (err, user) {
    if (err) res.json(err);else res.json('User ', {
      _id: req.params.id
    }, ' was successfully removed');
  });
}; // Delete All User's Posts


exports.delete_posts = function (req, res, next) {
  var postCreatorId = req.params.id;
  User.findById(postCreatorId, function (err, user) {
    if (err) throw new Error(err);
    Post.deleteMany({
      postCreator: [postCreatorId]
    }, function (err, post) {
      if (err) {
        res.json(err);
      } else {
        res.json('Posts were successfully removed');
      }
    });
  });
}; // Delete All User's Comments


exports.delete_comments = function (req, res, next) {
  var postCreatorId = req.params.id;
  User.findById(postCreatorId, function (err, user) {
    if (err) throw new Error(err);
    Comment.deleteMany({
      commentCreatorId: [postCreatorId]
    }, function (err, comment) {
      if (err) {
        res.json(err);
      } else {
        res.json('Comments were successfully removed');
      }
    });
  });
}; // Delete All User's Follows


exports.delete_follows = function (req, res, next) {
  var postCreatorId = req.params.id;
  User.findById(postCreatorId, function (err, user) {
    if (err) throw new Error(err);
    Follow.deleteMany({
      initiatedFollowuserId: [postCreatorId]
    }, function (err, follow) {
      if (err) {
        res.json(err);
      } else {
        res.json('Follows were successfully removed');
      }
    });
  });
}; // Delete All User's Followers


exports.delete_followers = function (req, res, next) {
  var postCreatorId = req.params.id;
  User.findById(postCreatorId, function (err, user) {
    if (err) throw new Error(err);
    Follower.deleteMany({
      receivedFollowUserId: [postCreatorId]
    }, function (err, follower) {
      if (err) {
        res.json(err);
      } else {
        res.json('Followers were successfully removed');
      }
    });
  });
};

exports.user_account = passport.authenticate('jwt', {
  session: false
}), function (req, res, next) {
  return res.json({
    id: req.user.id,
    username: req.user.username,
    userImage: req.user.userImage,
    userTheme: req.user.userTheme,
    userThemeType: req.user.userThemeType,
    email: req.user.email
  });
};