const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        default: ""
    },
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        default: ""
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        default: ""
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        default: ""
    },
    password: {
        type: String,
        required: true,
        default: ""
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    userImage: {
        type: String,
        default: ""
    },
    userBio: {
        type: String,
        default: ""
    },
    userLocation: {
        type: String,
        default: ""
    },
    userInstagram: {
        type: String,
        default: ""
    },
    userFacebook: {
        type: String,
        default: ""
    },
    userTwitter: {
        type: String,
        default: ""
    }, 
    userTheme: {
        type: String,
        default: "souseDefaultTheme"
    },
    userThemeType: {
        type: String,
        default: "Light"
    },
    signUpDate: {
        type: Date,
        default: Date.now
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId, //Returns the entire post
        ref: 'Posts'
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comments'
    }],
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Followers'
    }],
    follows: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Follows'
    }]
});

const PostSchema = new mongoose.Schema({
    postCreator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    postCreatedDate: {
        type: Date,
        default: Date
    },
    postUpdateDate: {
        type: Date,
        default: Date.now
    },
    sousePosts: {
        postCaption: {
            type: String,
            trim: true,
            default: ""
        },
        postUnixTimestamp: {
            type: String,
            trim: true,
            default: ""
        },
        postImageFileType: {
            type: String,
            trim: true,
            default: ""
        },
        postImageFileName: {
            type: String,
            trim: true,
            default: ""
        },
        postImageURL: {
            type: String,
            trim: true,
            default: ""
        }
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comments'
    }]
});

const CommentSchema = new mongoose.Schema({
    commentCreatorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
     commentCreatedDate: {
         type: Date,
         default: Date.now
     },
     souseComment: {
         type: String,
         trim: true,
         default: ""
     },
     originalPostId: {
         type: String,
         trim: true,
         default: ""
     },
     commentCreatorUsername: {
        type: String,
        trim: true,
        default: ""
     }
});

const FollowerSchema = new mongoose.Schema({
    followerUserId: {
        type: String,
        trim: true,
        default: ""
    },
    followerUserImage: {
        type: String,
        default: ""
    },
    followerUsername: {
        type: String,
        default: ""
    },
    receivedFollowUserId: {
        type: String,
        trim: true,
        default: ""
    },
    followedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    followedDate: {
        type: Date,
        default: Date.now
    }
});

const FollowSchema = new mongoose.Schema({
    followUserId: {
        type: String,
        trim: true,
        default: ""
    },
    followUserImage: {
        type: String,
        default: ""
    },
    followUsername: {
        type: String,
        default: ""
    },
    initiatedFollowuserId: {
        type: String,
        trim: true,
        default: ""
    },
    follows: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    followedDate: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('Users', UserSchema);
const Post = mongoose.model('Posts', PostSchema);
const Comment = mongoose.model('Comments', CommentSchema);
const Follower = mongoose.model('Followers', FollowerSchema);
const Follow = mongoose.model('Follows', FollowSchema);

module.exports = { User, Post, Comment, Follower, Follow }