const souseRouter = require('express').Router({mergeParams: true}),
    userController = require('../controller/userController'),
    postController = require('../controller/postController'),
    commentController = require('../controller/commentController'),
    userConnectionController = require('../controller/userConnectionController'),
    souseModel = require('../model/souseModel');

// Routes for Users
souseRouter.route('/u/register')
    .post(userController.register_user);

souseRouter.route('/u/login')
    .post(userController.login_user);

souseRouter.route('/u/account')
    .get(userController.user_account);

souseRouter.route('/u')
    .get(userController.find_user);

souseRouter.route('/u/upload/:id')
    .post(userController.upload_user_image);

souseRouter.route('/u/upload/:username/:timestamp') // Post Form on Main Page
    .post(userController.upload_user_image_mainpage);

souseRouter.route('/u/edit/:id')
    .get(userController.edit_user);

souseRouter.route('/u/update/:id')
    .post(userController.update_user);

souseRouter.route('/u/update/nopassword/:id')
    .post(userController.update_user_nopassword);

souseRouter.route('/u/delete/:id')
    .get(userController.delete_user);

souseRouter.route('/u/delete/userimage/:id')
    .get(userController.delete_user_image);

souseRouter.route('/u/delete/all/userimage/:id')
    .get(userController.delete_all_user_images);

souseRouter.route('/u/p/delete/:id')
    .get(userController.delete_posts);

souseRouter.route('/u/c/delete/:id')
    .get(userController.delete_comments);

souseRouter.route('/u/follows/delete/:id')
    .get(userController.delete_follows);

souseRouter.route('/u/followers/delete/:id')
    .get(userController.delete_followers);

// Routes for Posts
souseRouter.route('/p/add/:postCreator')
    .post(postController.create_post);

souseRouter.route('/p')
    .get(postController.find_post);

souseRouter.route('/p/upload/:id/:postCreator/:postUnixTimestamp')
    .post(postController.upload_post_image);

souseRouter.route('/p/edit/:id')
    .get(postController.edit_post);

souseRouter.route('/p/update/:id')
    .post(postController.update_post);

souseRouter.route('/p/delete/:id')
    .get(postController.delete_post);

souseRouter.route('/p/delete/postimage/:id/:postCreator/:postUnixTimestamp')
    .get(postController.delete_post_image);

// Routes for Comments
souseRouter.route('/c/add')
    .post(commentController.create_comment);

souseRouter.route('/c')
    .get(commentController.find_comment);

souseRouter.route('/c/delete/:id')
    .get(commentController.delete_comment);

/*
souseRouter.route('/c/delete') // Bulk Delete Comments
    .get(commentController.delete_comments);
*/

// Routes for Follows
souseRouter.route('/follows/add') // Follow
    .post(userConnectionController.follows);

souseRouter.route('/follows')
    .get(userConnectionController.find_follows);

souseRouter.route('/follows/delete/:id') // Unfollow
    .get(userConnectionController.delete_follow);

/*
souseRouter.route('/follows/delete') // Bulk Delete Follows
    .get(userConnectionController.delete_follows);
*/

// Routes for Followers
souseRouter.route('/followers/add')
    .post(userConnectionController.add_follower);

souseRouter.route('/followers')
    .get(userConnectionController.find_follower);

souseRouter.route('/followers/delete/:id') // Being Unfollowed
    .get(userConnectionController.delete_follower);

/*
souseRouter.route('/followers/delete') // Bulk Delete Followers
    .get(userConnectionController.delete_followers);
*/

module.exports = souseRouter;