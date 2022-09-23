const express = require('express'),
  app = express(),
  path = require('path'),
  bodyParser = require('body-parser'),
  passport = require('passport'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  config = require('./config'),
  souseModel = require('./database/model/souseModel'),
  routes = require('./database/routes/routes'),
  webpack = require('webpack'),
  webpackMiddleware = require('webpack-dev-middleware'),
  webpackConfig = require('../../webpack.config.js'),
  port = process.env.PORT || 3002;

  app.use(webpackMiddleware(
    webpack(webpackConfig),
    { publicPath: '/' }
));

mongoose.Promise = global.Promise;
mongoose.connect(config.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }).then(
    () => {console.log('Database is connected')},
    err => {console.log('Cannot connect to the database '+ err)}
);

app.use(express.static(path.join(__dirname + './../../')));
app.use(passport.initialize());
require('./passport')(passport);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/souseAPI', routes);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname + '../../dist/index.html'));
});

app.get('/*', (req, res) => {
    let url = path.join(__dirname, '../../dist', 'index.html');
    if (!url.startsWith('/app/')) // we're on local windows
        url = url.substring(1);
    res.sendFile(url);
});

app.listen(port, () => {
    console.log('Server started on port ' + port)
});

/* Mongoose 
// Mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(uri).then(
    () => {console.log('Database is connected')},
    err => {console.log('Cannnot connect to the database' + err)}
);
//mongoose.connect('mongodb://localhost/Postsdb'); //change Postsdb to whatever you'd like to name your database
const db = mongoose.connection;

// Mongo Error
db.on('error', console.error.bind(console, 'connection error:'));

// use sessions for tracking logins
app.use(session({
    secret: 'react-template',
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
        mongooseConnection: db
    })
}));
*/

