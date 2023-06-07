//Khong duoc xoa nhé
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
//Được chỉnh nhé
const indexRouter = require('./routes/index');
const HomeRouter = require('./components/Home');
const ProductsRouter = require('./components/Products');
const AboutRouter = require('./components/About');
const DiscountRouter = require('./components/Discount');
const ContactRouter = require('./components/Contact');
const InsertRouter = require('./components/Insert');
const DeleteRouter = require('./components/Delete');
const UpdateRouter = require('./components/Update');
const SearchRouter = require('./components/Search');
const LogInRouter = require('./components/LogIn');
const RegisterRouter = require('./components/Register');
const CartRouter = require('./components/Cart');
const ComputerRouter = require('./components/Computer');
const MouseRouter = require('./components/Mouse');
const HardiskRouter = require('./components/Hardisk');
/* --------------------------- */

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Được chỉnh 
app.use('/', indexRouter)
app.use('/Home', HomeRouter);
app.use('/Products',ProductsRouter);
app.use('/About',AboutRouter);
app.use('/Discount',DiscountRouter);
app.use('/Contact',ContactRouter);
app.use('/Insert',InsertRouter);
app.use('/Delete',DeleteRouter);
app.use('/Update',UpdateRouter);
app.use('/Search',SearchRouter);
app.use('/LogIn',LogInRouter);
app.use('/Register',RegisterRouter);
app.use('/Cart',CartRouter);
app.use('/Computer',ComputerRouter);
app.use('/Mouse',MouseRouter);
app.use('/Hardisk',HardiskRouter);

/* --------------------------- */


// catch 404 and forward to error handler
app.use(function(req,
                 res,
                 next) {
  next(createError(404));
});

// error handler
app.use(function(err,
                 req,
                 res,
                 next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
