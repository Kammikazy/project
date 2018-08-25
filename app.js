const express = require('express');
const  path = require('path');
const  favicon = require('serve-favicon');
const  logger = require('morgan');
const  cookieParser = require('cookie-parser');
const  bodyParser = require('body-parser');
//const login = require('./routes/login');
//const  registration = require('./routes/registration');
//var admin = require('./routes/Administration');
const session = require('express-session');

const  app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'andersonmendesdev',
    resave: false,
    saveUninitialized: false
}))

require('./routes/login')(app)
require('./routes/home')(app)
require('./routes/news')(app)
require('./routes/Administration')(app)
//require('./routes/Administration/perfil')(app)
require('./routes/logout')(app)
//require('./routes/Administration/Alliances')(app)
//app.use('/', login);
//app.use('/Administration', admin);
//**********************************//
//app.use('/', registration);

//app.use('/thegames', thegames);
//app.use('/forum', forum);
//app.use('/store',store);
//app.use('/medias',medias);
//app.use('/wiki',wiki);
//app.use('/support',support);
//app.use('/userabuse',userabuse);
//app.use('/passwordresete',passwordresete);
/*******************************************************/
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
