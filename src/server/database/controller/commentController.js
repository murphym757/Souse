const mongoose = require('mongoose'),
    User = mongoose.model('Users'),
    Post = mongoose.model('Posts'),
    Comment = mongoose.model('Comments'),
    config = require('../../config'),
    jwt = require('jsonwebtoken'),
    passport = require('passport');

    // Create Comment
    exports.create_comment = (req, res, next) => {
        const originalPostId = req.body.originalPostId; // This is needed to fing the postId
        const commentCreatorId = req.body.commentCreatorId;
        const commentCreatorUsername = req.body.commentCreatorUsername;
        Post.findById(originalPostId, (err, post) => { // Post Caption Upload
            if (err) throw new Error(err);

            User.findById(commentCreatorId, (err, user) => { // Post Caption Upload
                if (err) throw new Error(err);

                const newComment = new Comment({
                    commentCreatorId: commentCreatorId,
                    commentCreatorUsername: commentCreatorUsername,
                    souseComment: req.body.souseComment,
                    originalPostId: originalPostId,
                });

                Comment.create(newComment, (err, comment) => {
                    if (err) {
                        console.log(err);
                    }

                    user.comments.push(newComment);
                    user.save();
                    post.comments.push(newComment);
                    post.save();
                });
            });
        });
    }

    // Get Comment
    exports.find_comment = (req, res, next) => {
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