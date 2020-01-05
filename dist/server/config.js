"use strict";

var dotenv = require('dotenv');

dotenv.config();
module.exports = {
  MONGODB_URI: process.env.MONGODB_URI,
  DATABASE_LOCAL: process.env.DATABASE_LOCAL,
  AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME,
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  AWS_REGION: process.env.AWS_REGION,
  AWS_Uploaded_File_URL_LINK: process.env.AWS_Uploaded_File_URL_LINK
};