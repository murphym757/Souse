const mongoose = require('mongoose'),
    User = mongoose.model('Users'),
    gravatar = require('gravatar'),
    bcrypt = require('bcryptjs'),
    jwt = require('jsonwebtoken'),
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
                const avatar = gravatar.url(req.body.email, {
                    s: '200',
                    r: 'pg',
                    d: 'mm'
                });
                const newUser = new User({
                    username: req.body.username,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: req.body.password,
                    avatar
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
                                    avatar: user.avatar
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
        User.find(function (err, users) {
            if (err) {
                console.log(err);
            } else {
                res.json(users);
            }
        });
    }

    //Not Working yet
    exports.delete_user = (req, res, next) => {
        User.findOneAndRemove({username: req.params.username}, (err, user) => {
        if(err) res.json(err);
        else res.json('User ', {username: req.params.username}, ' was successfully removed');
    });
    }

    exports.user_account = passport.authenticate('jwt', { session: false }), (req, res, next) => {
        return res.json({
            id: req.user.id,
            username: req.user.username,
            email: req.user.email
        });
    }