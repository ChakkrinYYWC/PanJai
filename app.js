const   express = require("express"),
        bodyParser = require("body-parser"),
        mongoose = require("mongoose"),
        passport = require('passport'),
        passportLocal = require('passport-local'),
        passportLocalMongoose = require('passport-local-mongoose'),
        methodOverride = require('method-override');
const { monitorEventLoopDelay } = require("perf_hooks");

const   app = express();
app.use(methodOverride("_method"));
app.use(require('express-session')({
    secret: 'SE101',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session()); 


app.listen(8000,function(req,res){
    console.log('EduTarot has started!');
});