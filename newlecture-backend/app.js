var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// cors 사용을 설정
let cors = require("cors");

var homeController = require('./controllers/HomeController');
var customerNoticeController = require('./controllers/customer/NoticeController');
var noticeController = require('./controllers/api/NoticeController');
var memberController = require('./controllers/api/MemberController');
//var indexRouter = require('./controllers/index');
//var usersRouter = require('./controllers/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
// cors 사용
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'static')));

app.use('/', homeController);
app.use('/customer/notice', customerNoticeController);
app.use('/api/notice', noticeController);
app.use('/api/member',memberController);
// app.use('/', indexRouter);
// app.use('/users', usersRouter);

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
