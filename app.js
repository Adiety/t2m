var createError = require('http-errors');
var express = require('express');
var path = require('path');

require('./app_server/models/db');

const indexRouter = require('./app_server/routes/index');
const signupRouter = require('./app_server/routes/signup'); 
const loginRouter = require('./app_server/routes/login');
const aboutRouter = require('./app_server/routes/aboutus');
const contactRouter = require('./app_server/routes/contact');
const cocRouter = require('./app_server/routes/coc');
const hodRouter = require('./app_server/routes/hod');
const facultyRouter = require('./app_server/routes/faculty');
const hostelinchargeRouter = require('./app_server/routes/hostelincharge');
const counsellorRouter = require('./app_server/routes/counsellor');
const moderatorRouter = require('./app_server/routes/moderator');
const studentRouter = require('./app_server/routes/student');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server','views'));
app.set('view engine', 'ejs');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'app_server','public')));


app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/signup',signupRouter);
app.use('/aboutus',aboutRouter);
app.use('/contact',contactRouter);
app.use('/coc',cocRouter);
app.use('/hod',hodRouter);
app.use('/faculty',facultyRouter);
app.use('/hostelincharge',hostelinchargeRouter);
app.use('/counsellor',counsellorRouter);
app.use('/moderator',moderatorRouter);
app.use('/student',studentRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
