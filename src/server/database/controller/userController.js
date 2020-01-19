const mongoose = require('mongoose'),
    User = mongoose.model('Users'),
    Post = mongoose.model('Posts'),
    Comment = mongoose.model('Comments'),
    Follow = mongoose.model('Follows'),
    Follower = mongoose.model('Followers'),
    bcrypt = require('bcryptjs'),
    jwt = require('jsonwebtoken'),
    aws = require('aws-sdk'),
    multer = require('multer'),
    multerS3 = require('multer-s3'),
    path = require('path'),
    config = require('../../config'),
    passport = require('passport'),
    validateRegisterInput = require('../../validation/register'),
    validateLoginInput = require('../../validation/login');

    exports.register_user = (req, res, next) => {
        const { errors, isValid } = validateRegisterInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }
        User.findOne({email: req.body.email}) // Check to see if email is already in DB
            .then(user => {
            if (user) { // If matching email found, return error stating email already exist
                return res.status(400).json({
                    email: 'Email already exists'
                });
            } else { // If no matching email, user is allowed to create an account
                const newUser = new User({
                    username: req.body.username,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: req.body.password
                });

                bcrypt.genSalt(10, (err, salt) => { // Password field
                    if (err) console.error('There was an error', err);
                    else {
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if (err) console.error('There was an error', err);
                            else {
                                newUser.password = hash;
                                newUser
                                    .save()
                                    .then(user => {
                                        res.json(user)
                                    });
                                }
                            });
                        }
                    });
                }   
            });
    }

    exports.login_user = (req, res, next) => {
        const { errors, isValid } = validateLoginInput(req.body);

        if(!isValid) {
            return res.status(400).json(errors);
     
        }

        const email = req.body.email;
        const password = req.body.password;

        User.findOne({email}) // Check to see if email is already in DB
            .then(user => {
                if(!user) { // If email not found, return error stating so
                    errors.email = 'User not found'
                    return res.status(404).json(errors);
                }
                bcrypt.compare(password, user.password)
                        .then(isMatch => {
                            if(isMatch) {
                                const payload = {
                                    id: user.id,
                                    username: user.username,
                                    userImage: user.userImage,
                                    userTheme: user.userTheme,
                                    userThemeType: user.userThemeType
                                }
                                jwt.sign(payload, 'secret', {
                                    expiresIn: 3600
                                }, (err, token) => {
                                    if(err) console.error('There is some error in token', err);
                                    else {
                                        res.json({
                                            success: true,
                                            token: `Bearer ${token}`
                                        });
                                    }
                                });
                            } else {
                                errors.password = 'Incorrect Password';
                                return res.status(400).json(errors);
                            }
                        });
            });
    }
    // Get User
    exports.find_user = (req, res, next) => {
        User.find((err, users) => {
            if (err) {
                console.log(err);
            } else {
                res.json(users);
            }
        });
    }

    // Edit User
    exports.edit_user = (req, res, next) => {
        const userId = req.params.id;
        User.findById(userId, (err, user) => {
            res.json(user);
        });
    }

     // Update User (User Chooses To Not Change Password)
     exports.update_user_nopassword = (req, res, next) => {
         const newerUser = {
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
             userBio: req.body.userBio,
             newUserImageSetup: req.body.newUserImageSetup
         }

         const updateuser = {new: true};
         User.findByIdAndUpdate(req.params.id, newerUser, updateuser, (err, user) => {
             if (!user)
                 res.status(404).send("User could not be found");
             else {
                 user.save().then(user => {
                         res.json('Update complete');
                     })
                     .catch(err => {
                         res.status(400).send("Unable to update user");
                     });
             }
         });
     }

    // Update User (User Inputs Password)
    exports.update_user = (req, res, next) => {
        const newerUser = {
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
            userBio: req.body.userBio,
            newUserImageSetup: req.body.newUserImageSetup
            }

        const updateuser = {new: true};
        User.findByIdAndUpdate(req.params.id, newerUser, updateuser, (err, user) => {
            if (!user)
                res.status(404).send("User could not be found");
            else {
                bcrypt.genSalt(10, (err, salt) => { // Password field
                    if (err) console.error('There was an error', err);
                    else {
                        bcrypt.hash(user.password, salt, (err, hash) => {
                            if (err) console.error('There was an error', err);
                            else {
                                user.password = hash;
                                user.save().then(user => {
                                        res.json('Update complete');
                                    })
                                    .catch(err => {
                                        res.status(400).send("Unable to update user");
                                    });
                            }
                        });
                    }
                });
            }
        });
    }

    // Upload Image (User Page)
    exports.upload_user_image = (req, res, next) => {
        const userName = req.params.username;
        const postTimestamp = req.params.timestamp;
        User.findOne({username: "" + userName + ""}).select("_id username").exec((err, user) => {
            const userData = {
                _id: user._id,
                username: user.username    
            }
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
                            fieldName: "This image: " + userData.username + extname + " was uploaded to Souse"
                        });
                    },
                    key: (req, file, cb) => {
                        const filetypes = /jpeg|jpg|png|gif/;
                        const extname = path.extname(file.originalname).toLowerCase();
                        const extNameTest = filetypes.test(path.extname(file.originalname).toLowerCase());
                        const mimeTypeTest = filetypes.test(file.mimetype);
                        const newFileName = Date.now().toString();
                        const fullPath = 'users/' + "" + userData._id + "" + '/posts/' + postTimestamp + '/' + userData._id + extname;
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

    // Delete User
    exports.delete_user = (req, res, next) => {
        User.findByIdAndRemove({_id: req.params.id}, (err, user) => {
            if(err) res.json(err);
            else res.json('User ', {_id: req.params.id}, ' was successfully removed');
        });
    }

    // Delete User's Image
    exports.delete_user_image = (req, res, next) => {
        const loggedinUserId = req.params.id;
        const awsBucketName = config.AWS_BUCKET_NAME;
        let s3bucket = new aws.S3({
            accessKeyId: config.AWS_ACCESS_KEY_ID,
            secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
            region: config.AWS_REGION
        });

        var params = {
            Bucket: awsBucketName,
            Prefix: 'users/' + "" + loggedinUserId + "/"
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
                } else {
                }
            });
        });
    }

    // Delete All User's Posts
    exports.delete_posts = (req, res, next) => {
        const postCreatorId = req.params.id;
        User.findById(postCreatorId, (err, user) => { 
            if (err) throw new Error(err);

            Post.deleteMany({postCreator: [postCreatorId]}, (err, post) => {
                if(err) {
                    res.json(err);
                } else {
                    res.json('Posts were successfully removed');
                }
            });
        })
    };
    // Delete All User's Comments
    exports.delete_comments = (req, res, next) => {
        const postCreatorId = req.params.id;
        User.findById(postCreatorId, (err, user) => { 
            if (err) throw new Error(err);
            
            Comment.deleteMany({commentCreatorId: [postCreatorId]}, (err, comment) => {
                if(err) {
                    res.json(err);
                } else {
                    res.json('Comments were successfully removed');
                }
            });
        })
    };
    // Delete All User's Follows
    exports.delete_follows = (req, res, next) => {
        const postCreatorId = req.params.id;
        User.findById(postCreatorId, (err, user) => { 
            if (err) throw new Error(err);
            
            Follow.deleteMany({initiatedFollowuserId: [postCreatorId]}, (err, follow) => {
                if(err) {
                    res.json(err);
                } else {
                    res.json('Follows were successfully removed');
                }
            });
        })
    };
    // Delete All User's Followers
    exports.delete_followers = (req, res, next) => {
        const postCreatorId = req.params.id;
        User.findById(postCreatorId, (err, user) => { 
            if (err) throw new Error(err);
            
            Follower.deleteMany({receivedFollowUserId: [postCreatorId]}, (err, follower) => {
                if(err) {
                    res.json(err);
                } else {
                    res.json('Followers were successfully removed');
                }
            });
        })
    };

    exports.user_account = passport.authenticate('jwt', { session: false }), (req, res, next) => {
        return res.json({
            id: req.user.id,
            username: req.user.username,
            userImage: req.user.userImage,
            userTheme: req.user.userTheme,
            userThemeType: req.user.userThemeType,
            email: req.user.email
        });
    }