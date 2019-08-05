"use strict";

var souseRouter = require('express').Router(),
    userController = require('../controller/userController'),
    postController = require('../controller/postController'),
    commentController = require('../controller/commentController'),
    userConnectionController = require('../controller/userConnectionController'),
    souseModel = require('../model/souseModel'); // Routes for Users


souseRouter.route('/u/register').post(userController.register_user);
souseRouter.route('/u/login').post(userController.login_user);
souseRouter.route('/u/account').get(userController.user_account);
souseRouter.route('/u').get(userController.find_user);
souseRouter.route('/u/edit/:id').get(userController.edit_user);
souseRouter.route('/u/update/:id').post(userController.update_user);
souseRouter.route('/u/delete/:id').get(userController.delete_user); // Routes for Posts

souseRouter.route('/p/add').post(postController.create_post);
souseRouter.route('/p').get(postController.find_post);
souseRouter.route('/p/edit/:id').get(postController.edit_post);
souseRouter.route('/p/update/:id').post(postController.update_post);
souseRouter.route('/p/delete/:id').get(postController.delete_post); // Routes for Comments

souseRouter.route('/c/add').post(commentController.create_comment);
souseRouter.route('/c').get(commentController.find_comment);
souseRouter.route('/c/delete/:id').get(commentController.delete_comment); // Routes for Follows

souseRouter.route('/follows/add') // Follow
.post(userConnectionController.follows);
souseRouter.route('/follows').get(userConnectionController.find_follows);
/*souseRouter.route('/following/delete/:id') // Unfollow
    .get(userConnectionController.unfollow);*/
// Routes for Followers

souseRouter.route('/followers/add').post(userConnectionController.add_follower);
souseRouter.route('/followers').get(userConnectionController.find_follower);
/* souseRouter.route('/followers/delete/:id') // Being Unfollowed
    .get(userConnectionController.delete_follower);*/

module.exports = souseRouter;