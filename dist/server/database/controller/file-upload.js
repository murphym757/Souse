"use strict";

var aws = require('aws-sdk'),
    multer = require('multer'),
    multerS3 = require('multer-s3'),
    config = require('../../config');

aws.config.update({
  accessKeyId: config.AWS_ACCESS_KEY_ID,
  secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
  region: config.AWS_REGION
});
var s3 = new aws.S3();

var fileFilter = function fileFilter(req, file, cb) {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Invalid Mime Type, only JPEG and PNG'), false);
  }
};

var upload = multer({
  fileFilter: fileFilter,
  storage: multerS3({
    s3: s3,
    bucket: config.AWS_BUCKET_NAME,
    acl: 'public-read',
    metadata: function metadata(req, file, cb) {
      cb(null, {
        fieldName: "TESTING_META_DATA"
      });
    },
    key: function key(req, file, cb) {
      var newFileName = Date.now().toString();
      var fullPath = 'users/secondpart/' + newFileName;
      cb(null, fullPath);
    }
  })
});
module.exports = upload;