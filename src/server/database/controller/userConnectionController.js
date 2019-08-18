const mongoose = require('mongoose'),
    User = mongoose.model('Users'),
    Follow = mongoose.model('Follows'),
    Follower = mongoose.model('Followers'),
    config = require('../../config'),
    jwt = require('jsonwebtoken'),
    passport = require('passport');

// Get Follower
exports.find_follower = (req, res, next) => {
    Follower.find((err, follower) => {
        if (err) {
            console.log(err);
        } else {
            res.json(follower);
        }
    }).sort({
        followedDate: 'descending'
    });
}

// Get Following
exports.find_follows = (req, res, next) => {
    Follow.find((err, follow) => {
        if (err) {
            console.log(err);
        } else {
            res.json(follow);
        }
    }).sort({
        followedDate: 'descending'
    });
}

// Create Follow (Pressed "Follow" Button)
exports.follows = (req, res, next) => {
    const followUserId = req.body.followUserId; // This is the user who pressed "Follow"
    const initiatedFollowuserId = req.body.initiatedFollowuserId; // This is the user who received the follow
    User.findById(initiatedFollowuserId, (err, user) => { // Post Caption Upload
        if (err) throw new Error(err);

        const newFollow = new Follow({
            followUserId: followUserId,
            initiatedFollowuserId: initiatedFollowuserId
        });

        Follow.create(newFollow, (err, follow) => {
            if (err) {
                console.log(err);
            }
            user.follows.push(newFollow);
            user.save();
        });
    });

    User.findById(followUserId).populate({ // Sends Data to User Database
        path: 'follows',
        model: 'Users'
    }).exec((err, user) => {
        console.log(user.follows);
    })
}

// Create Follower
exports.add_follower = (req, res, next) => {
    const followerUserId = req.body.followerUserId; // The user who pressed "follow"
    const receivedFollowUserId = req.body.receivedFollowUserId; // This is the user who received the follow
    User.findById(receivedFollowUserId, (err, user) => { // Post Caption Upload
        if (err) throw new Error(err);

        const newFollower = new Follower({
            followerUserId: followerUserId,
            receivedFollowUserId: receivedFollowUserId
        });

        Follower.create(newFollower, (err, follower) => {
            if (err) {
                console.log(err);
            }
            user.followers.push(newFollower);
            user.save();
        });

    });

    User.findById(followerUserId).populate({ // Sends Data to User Database
        path: 'followers',
        model: 'Users'
    }).exec((err, user) => {
        console.log(user.followers);
    })
}