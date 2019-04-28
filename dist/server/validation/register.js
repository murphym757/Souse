"use strict";

var Validator = require('validator'),
    isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
  var errors = {};
  data.username = !isEmpty(data.username) ? data.username : '';
  data.firstName = !isEmpty(data.firstName) ? data.firstName : '';
  data.lastName = !isEmpty(data.lastName) ? data.lastName : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password_confirm = !isEmpty(data.password_confirm) ? data.password_confirm : ''; // Username Field

  if (!Validator.isLength(data.username, {
    min: 2,
    max: 30
  })) {
    errors.username = 'Username must be between 2 to 30 chars';
  }

  if (Validator.isEmpty(data.username)) {
    errors.username = 'Username field is required';
  } // First Name Field


  if (!Validator.isLength(data.firstName, {
    min: 2,
    max: 30
  })) {
    errors.firstName = 'First name must be between 2 to 30 chars';
  }

  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = 'First name field is required';
  } // Last Name Field


  if (!Validator.isLength(data.lastName, {
    min: 2,
    max: 30
  })) {
    errors.lastName = 'Last name must be between 2 to 30 chars';
  }

  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = 'Last name field is required';
  } // Email Field


  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email is required';
  } // Password Field


  if (!Validator.isLength(data.password, {
    min: 6,
    max: 30
  })) {
    errors.password = 'Password must have 6 chars';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password is required';
  }

  if (!Validator.isLength(data.password_confirm, {
    min: 6,
    max: 30
  })) {
    errors.password_confirm = 'Password must have 6 chars';
  }

  if (!Validator.equals(data.password, data.password_confirm)) {
    errors.password_confirm = 'Password and Confirm Password must match';
  }

  if (Validator.isEmpty(data.password_confirm)) {
    errors.password_confirm = 'Password is required';
  }

  return {
    errors: errors,
    isValid: isEmpty(errors)
  };
};