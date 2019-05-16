const mongoose = require('mongoose'),
    User = mongoose.model('Users'),
    Post = mongoose.model('Posts'),
    Comment = mongoose.model('Comments'),
    config = require('../../config'),
    jwt = require('jsonwebtoken'),
    passport = require('passport');

    // Create Comment
    exports.create_comment = (req, res, next) => {
        const postId = req.params.id; // This is needed to fing the postId
        const postCreatorId = req.params.postCreatorId;
        const commentCreator = req.body.commentCreator;
        User.findById(postCreatorId, (err, user) => { // Post Caption Upload
            if (err) throw new Error(err);

            Post.findById(postId, (err, post) => {
                const newComment = new Comment({
                    commentCreator: commentCreator,
                    souseComment: req.body.souseComment
                });

                Comment.create(newComment, (err, comment) => {
                    if (err) {
                        console.log(err);
                    }
                    user.comment.push(newComment);
                    user.save();
                });
            })
        });

        User.findById(commentCreator).populate({ // Sends Data to User Database
            path: 'comments',
            model: 'Users'
        }).exec((err, user) => {
            console.log(user.comments);
        })
    }

    // Get Post
    exports.find_post = (req, res, next) => {
        Comment.find((err, comments) => {
            if (err) {
                console.log(err);
            } else {
                res.json(comments);
            }
        }).sort({
            commentCreatedDate: 'descending'
        });
    }


    // Delete Post
    exports.delete_comment = (req, res, next) => {
        Comment.findByIdAndRemove({
            _id: req.params.id
        }, (err, post) => {
            if (err) {
                res.json(err);
            } else {
                res.json('Comment ', {
                    _id: req.params.id
                }, ' was successfully removed');
            }
        });
    }