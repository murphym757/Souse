const mongoose = require('mongoose'),
    User = mongoose.model('Users'),
    config = require('../../config'),
    jwt = require('jsonwebtoken'),
    passport = require('passport'),
    Post = mongoose.model('Posts'),
    Comment = mongoose.model('Comments');

// Create Post
exports.create_post = (req, res, next) => {
    const postCreatorId = req.body.postCreatorId; // This is needed to fing the postCreatorId
    User.findById(postCreatorId, (err, user) => { // Post Caption Upload
        if (err) throw new Error(err);

        const newPost = new Post({
            postCreator: postCreatorId,
            sousePosts: {
                postCaption: req.body.postCaption,
                postUnixTimestamp: req.body.postUnixTimestamp,
                postImageFileType: req.body.postImageFileType,
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
                postCaption: req.body.postCaption
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