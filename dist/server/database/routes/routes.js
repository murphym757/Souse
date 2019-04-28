"use strict";

var souseRouter = require('express').Router(),
    userController = require('../controller/userController'),
    postController = require('../controller/postController'),
    souseModel = require('../model/souseModel'); // Routes for Users


souseRouter.route('/u/register').post(userController.register_user);
souseRouter.route('/u/login').post(userController.login_user);
souseRouter.route('/u/account').get(userController.user_account);
souseRouter.route('/u').get(userController.find_user); // Routes for Posts

souseRouter.route('/p/add').post(postController.create_post);
souseRouter.route('/p').get(postController.find_post);
souseRouter.route('/p/edit/:id').get(postController.edit_post);
souseRouter.route('/p/update/:id').post(postController.update_post);
souseRouter.route('/p/delete/:id').get(postController.delete_post);
module.exports = souseRouter;