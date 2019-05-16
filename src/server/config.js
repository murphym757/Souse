const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    DATABASE_URL: process.env.DATABASE_URL,
    AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME,
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    AWS_REGION: process.env.AWS_REGION,
    AWS_Uploaded_File_URL_LINK: process.env.AWS_Uploaded_File_URL_LINK
}
console.log(process.env.AWS_BUCKET_NAME);