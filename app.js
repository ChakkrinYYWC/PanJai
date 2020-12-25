const   express = require("express"),
        bodyParser = require("body-parser"),
        mongoose = require("mongoose"),
        passport = require('passport'),
        passportLocal = require('passport-local'),
        passportLocalMongoose = require('passport-local-mongoose'),
        methodOverride = require('method-override'),
        cors = require('cors'),
        axios = require('axios'),
        indexRoutes = require('./routes/index');

const   app = express();
app.use(cors())
app.use(methodOverride("_method"));
app.use(require('express-session')({
    secret: 'SE101',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

//passport.use(new passportLocal(User.authenticate()));
//passport.serializeUser(User.serializeUser());
//passport.deserializeUser(User.deserializeUser());

app.use('/',indexRoutes);

app.post('/signin/facebook', async (req, res) => {
    console.log('Request -->', req.body.user)
  
    try {
      const response = await axios({
        method: 'get',
        url: `https://graph.facebook.com/v6.0/oauth/access_token?grant_type=fb_exchange_token&client_id=771047717101312&client_secret=94480ba4cd991ea93c6c8c87de138c03&fb_exchange_token=${req.body.user.accessToken}`
      })
       
      const result = response.data
      console.log('Result -->', result)
  
      // If (result) --> process signup (new user) / signin (exiting user)
    } catch (error) {}
  })

app.listen(8000,function(req,res){
    console.log('EduTarot has started!');
});