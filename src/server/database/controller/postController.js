const mongoose = require('mongoose'),
    User = mongoose.model('Users'),
    config = require('../../config'),
    jwt = require('jsonwebtoken'),
    passport = require('passport'),
    aws = require('aws-sdk'),
    multer = require('multer'),
    multerS3 = require('multer-s3'),
    path = require('path'),
    Post = mongoose.model('Posts'),
    Comment = mongoose.model('Comments');

// Create Post
exports.create_post = (req, res, next) => {
    const postCreatorId = req.body.postCreatorId; // This is needed to find the postCreatorId
    User.findById(postCreatorId, (err, user) => { // Post Caption Upload
        if (err) throw new Error(err);

        const newPost = new Post({
            postCreator: postCreatorId,
            sousePosts: {
                postCaption: req.body.postCaption,
                postLocation: req.body.postLocation,
                postUnixTimestamp: req.body.postUnixTimestamp,
                postImageFileType: req.body.postImageFileType,
                postImageFileName: req.body.postImageFileName,
                postImageURL: req.body.postImageURL
            }
        });

        Post.create(newPost, (err, post) => {
            if (err) {
                console.log(err);
            } 
            user.posts.push(newPost);
            user.save();
        });
    
        
    });

    User.findById(postCreatorId).populate({ // Sends Data to User Database
            path: 'posts',
            model: 'Users'
        }).exec((err, user) => {
        console.log(user.posts);
    })
}

// Upload Image
exports.upload_post_image = (req, res, next) => {
    const postId = req.params.id;
    const postCreatorId = req.body.postCreatorId;
    console.log("this should be the postCreatorId: " + postCreatorId)
    Post.findById(postId, (err, post) => {
        aws.config.update({
            accessKeyId: config.AWS_ACCESS_KEY_ID,
            secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
            region: config.AWS_REGION
        })

        const s3 = new aws.S3();

        const fileFilter = (req, file, cb) => {
            if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/gif') {
                cb(null, true)
            } else {
                cb(new Error('Invalid Mime Type, only JPEG/JPG, PNG, ang GIF'), false)
            }
        }

        const userImageUpload = multer({
            fileFilter,
            storage: multerS3({
                s3,
                bucket: config.AWS_BUCKET_NAME,
                acl: 'public-read',
                serverSideEncryption: 'AES256',
                contentType: multerS3.AUTO_CONTENT_TYPE,
                metadata: (req, file, cb) => {
                    const extname = path.extname(file.originalname).toLowerCase();
                    cb(null, {
                        fieldName: "This image: " + postId + extname + " was uploaded to Souse"
                    });
                },
                key: (req, file, cb) => {
                    const filetypes = /jpeg|jpg|png|gif/;
                    const extname = path.extname(file.originalname).toLowerCase();
                    console.log(extname);
                    const extNameTest = filetypes.test(path.extname(file.originalname).toLowerCase());
                    const mimeTypeTest = filetypes.test(file.mimetype);
                    const newFileName = Date.now().toString();
                    const fullPath = 'posts/' + "" + postId + "" + '/' + postId + extname;
                    if (mimeTypeTest && extNameTest) {
                        return cb(null, fullPath);
                    } else {
                        cb('Error: Images Only!');
                    }
                }
            })
        })

        const singleUpload = userImageUpload.single('image');
        singleUpload(req, res, (err) => {
            if (err) res.json(err);
            else res.json({
                'imageName': req.file.key,
                'imageUrl': req.file.location
            });
        });
    })
}

// Delete User's Image
exports.delete_post_image = (req, res, next) => {
    const postId = req.params.id;
    const postCreatorId = req.body.postCreatorId;
    const awsBucketName = config.AWS_BUCKET_NAME;
    let s3bucket = new aws.S3({
        accessKeyId: config.AWS_ACCESS_KEY_ID,
        secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
        region: config.AWS_REGION
    });

    var params = {
        Bucket: awsBucketName,
        Prefix: 'posts/' + "" + postId + "/"
    };

    s3bucket.listObjects(params, (err, data, cb) => {
        if (err);

        if (data.Contents.length == 0);

        params = {
            Bucket: config.AWS_BUCKET_NAME
        };
        params.Delete = {
            Objects: []
        };

        data.Contents.forEach((content) => {
            params.Delete.Objects.push({
                Key: content.Key
            });
        });
        s3bucket.deleteObjects(params, (err, data, cb) => {
            if (err) {
                console.log(err);
            } else {}
        });
    });
}

// Get Post
exports.find_post = (req, res, next) => {
    Post.find((err, posts) => {
    if (err) {
      console.log(err);
    } else {
      res.json(posts);
    }
  }).sort({postCreatedDate: 'descending'});
}

// Edit Post
exports.edit_post = (req, res, next) => {
    const postCreatorId = req.body.postCreatorId;
    const postId = req.params.id;
    Post.findById(postId, (err, post) => {
      res.json(post);
    });
}

// Update Post
exports.update_post = (req, res, next) => {
    const newerPost = {
        postCreator: req.body.postCreatorId,
        sousePosts: {
            postCaption: req.body.postCaption,
            postLocation: req.body.postLocation,
            postUnixTimestamp: req.body.postUnixTimestamp,
            postImageFileType: req.body.postImageFileType,
            postImageFileName: req.body.postImageFileName,
            postImageURL: req.body.postImageURL
        }
    };
    const updatepost = {new: true};
    Post.findByIdAndUpdate(req.params.id, newerPost, updatepost, (err, post) => {
        if (!post)
            res.status(404).send("Post could not be found");
        else {
            post.save().then(post => {
                    res.json('Update complete');
                })
                .catch(err => {
                    res.status(400).send("Unable to update post");
                });
        }
    });
}

// Delete Post
exports.delete_post = (req, res, next) => {
    Post.findByIdAndRemove({_id: req.params.id}, (err, post) => {
        if(err) {
            res.json(err);
        } else {
            res.json('Post ', {_id: req.params.id}, ' was successfully removed');
        }
    });
}