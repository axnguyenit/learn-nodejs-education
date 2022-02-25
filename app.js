const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();
const dotenv = require('dotenv');
const { engine } = require('express-handlebars');
const methodOverride = require('method-override');
const db = require('./config/db');
const routes = require('./routes');

dotenv.config();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.engine(
	'hbs',
	engine({
		extname: '.hbs',
		helpers: {
			sum: (a, b) => a + b,
		},
	})
);
app.set('views', path.join(__dirname, 'resources', 'views'));
app.set('view engine', 'hbs');

// override with POST having ?_method=...
app.use(methodOverride('_method'));

// Connect db
db.connect();

// public dir
app.use(express.static(path.join(__dirname, 'public')));

// Routes init
routes(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
