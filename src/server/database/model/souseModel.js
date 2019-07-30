const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        default: null
    },
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        default: null
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        default: null
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        default: null
    },
    password: {
        type: String,
        required: true,
        default: null
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    userImage: {
        type: String,
        default: null
    },
    userBio: {
        type: String,
        default: null
    },
    userLocation: {
        type: String,
        default: null
    },
    userInstagram: {
        type: String,
        default: null
    },
    userFacebook: {
        type: String,
        default: null
    },
    userTwitter: {
        type: String,
        default: null
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
            default: ''
        },
        postUnixTimestamp: {
            type: String,
            trim: true,
            default: ''
        },
        postImageFileType: {
            type: String,
            trim: true,
            default: ''
        },
        postImageFileName: {
            type: String,
            trim: true,
            default: ''
        },
        postImageURL: {
            type: String,
            trim: true,
            default: ''
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
         default: ''
     },
     originalPostId: {
         type: String,
         trim: true,
         default: ''
     },
     commentCreatorUsername: {
         type: String,
            trim: true,
            default: ''
     }
});

const User = mongoose.model('Users', UserSchema);
const Post = mongoose.model('Posts', PostSchema);
const Comment = mongoose.model('Comments', CommentSchema);

module.exports = { User, Post, Comment }