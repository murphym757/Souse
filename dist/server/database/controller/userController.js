"use strict";

var mongoose = require('mongoose'),
    User = mongoose.model('Users'),
    gravatar = require('gravatar'),
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
      var avatar = gravatar.url(req.body.email, {
        s: '200',
        r: 'pg',
        d: 'mm'
      });
      var newUser = new User({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        avatar: avatar
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
          avatar: user.avatar
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
}; //Not Working yet


exports.delete_user = function (req, res, next) {
  User.findOneAndRemove({
    username: req.params.username
  }, function (err, user) {
    if (err) res.json(err);else res.json('User ', {
      username: req.params.username
    }, ' was successfully removed');
  });
};

exports.user_account = passport.authenticate('jwt', {
  session: false
}), function (req, res, next) {
  return res.json({
    id: req.user.id,
    username: req.user.username,
    email: req.user.email
  });
};