![Souse Logo](https://souse.s3.amazonaws.com/logos/souseBigLogo.svg)

### What is Souse?
An Instagram-like social media experience with an emphasis on style. Souse was created out of my desire to prove to myself that I can create a legit MERN app. Over the course of a year I went from relying (almost entirely) on previous projects. To creating and implementing algorithms on the fly without realizing I was doing it. 

### How To Use:
The user creates an account. From there, the user is taken to the login page. Upon logging in, a confirmation screen appears which essentially injects the entire app with users’ data for CRUD capabilities throughout. As previously stated, the user has CRUD control over all of their data for their user profile, posts, and comments.

### Style:
Souse is more than simply an Instagram clone. It does not matter if Souse has a million users or just one, the goal was to create something that can grow with (and around) its users. Similar to Instagram, Souse also has a night mode (with a catch). Souse features five distinctly unique themes, each with their own night mode variant. Each alternate theme is either a tribute to the colorway of a sports franchise, a major university, or even an obscure offshoot of electronic music. All of which paying tribute to the city of Miami in their own distinctive ways. Another major difference between Souse and Instagram is grid format for each: Souse is 4x4 and Instagram is 3x3. 

###### Here are the various Souse themes (Day/Night):
![Souse Themes](https://souse.s3.amazonaws.com/logos/SouseAllThemes.png)

### Structure:
The MERN stack consists of four components: MongoDB (database), Express (routing), React (front-end), and Node (server). While I have created apps with a few combinations of the four, I have never created an app using them all at once. Saying it was a challenge would be an understatement. That being said, there would not be a Souse app without a proper authentication foundation. The combination of Redux and JWT (JSON Web Token) helps insure that no matter what the user creates, only they can edit or delete it. In fact, all of Souse’s data inputs are user-protected. User security, as well as, user control is vital to the success of Souse. Souse is built with the Model–View–Controller (MVC) design pattern. This helps separate the front-end from the backend and everything in between.

## Built With

* [React](https://reactjs.org/tutorial/tutorial.html) - Front-end framework
* [Express](https://expressjs.com/) -Handles Node routing
* [React-Router](https://reacttraining.com/react-router/web/guides/quick-start) - Handles React Routing
* [React-Redux](https://react-redux.js.org/) - React state management tool
* [JWT](https://jwt.io/) - User login token system
* [Mongoose](https://mongoosejs.com/) - Modeling solutions for MongoDB
* [Node.js](https://nodejs.org/en/) - Backend framework
* [Amazon Web Services](https://aws.amazon.com/) - Amazon's cloud storage service
* [Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) - PaaP host
* [Axios](https://github.com/axios/axios) - Fetches data from APIs
* [Bootstrap](https://getbootstrap.com/) - Front-end component library
* [Styled-Components](https://styled-components.com/) - Combines ES6 with traditional CSS styling
* [Bootstrap-Styled/v4](https://bootstrap-styled.github.io/v4/) - Bootstrap 4 designed for the styled-components ecosystem
* [Webpack](https://webpack.js.org/guides/getting-started/) - JavaScript bundler
* [Babel](https://babeljs.io/docs/en/) - JavaScript compiler



## Authors

* **Maurice Murphy** - *Initial work* - [murphym757](https://github.com/murphym757)

See also the list of [contributors](https://github.com/murphym757/react-template/graphs/contributors) who participated in this project.

## Acknowledgments

* [Steps for setting up Webpack 4 via React](https://medium.com/dailyjs/building-a-react-component-with-webpack-publish-to-npm-deploy-to-github-guide-6927f60b3220)
* [How to make Webpack and Heroku work together](https://medium.com/@adityaa803/how-to-deploy-webpack-node-based-app-to-heroku-f55437602a3e)
* [MERN JWT Authentication Tutorial](https://appdividend.com/2018/07/18/react-redux-node-mongodb-jwt-authentication/)