const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    DATABASE_URL: process.env.DATABASE_URL,
    AWS_BUCKET_NAME: '',
    AWS_ACCESS_KEY_ID: '',
    AWS_SECRET_ACCESS_KEY: '',
    AWS_REGION: 'us-east-1',
    AWS_Uploaded_File_URL_LINK: ''
}