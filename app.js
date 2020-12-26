const express = require("express"),
      bodyParser = require("body-parser"),
      mongoose = require("mongoose"),
      passport = require('passport'),
      passportLocal = require('passport-local'),
      passportLocalMongoose = require('passport-local-mongoose'),
      methodOverride = require('method-override'),
      cors = require('cors'),
      axios = require('axios');

const user = require('./model/user');

const app = express();
var postPanjaiRoutes = require('./routes/PostController')
app.use(cors())
app.use(bodyParser.json())
app.use(methodOverride("_method"));
app.use(passport.initialize())
app.use(passport.session())
app.use(require('express-session')({
  secret: 'SE101',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect('mongodb+srv://Roong:rung241142@cluster0.txha8.mongodb.net/Cluster0?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    if (!err)
      console.log('Mongodb connection succeeded.')
    else
      console.log('Error while connecting MongoDB : ' + JSON.stringify(err, undefined, 2))
});

passport.use(new passportLocal(user.authenticate()));
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());



app.get('/', (req, res) => {
  let response = user.username;
  res.send(response);
})

app.get('/user',async (req, res)=>{
  let response = await user.find({})
  console.log(response)
  return res.send(response);
})

app.use('/Too-Panjai',postPanjaiRoutes)

// app.post("/user", function(req, res){
//   if(req.body.password != req.body.CPassword){
//       console.log("confirm password incorrect")
//       return res.redirect('/')
//   }
//   user.register(new user({username: req.body.Username}), req.body.password,function(error, user){
//       if(error){
//           console.log(error);
//           return res.render('call back register')
//       }

//       passport.authenticate('local')(req,res,function(){
//           //req.flash('success','Welcome to our website ,'+ user.username)
//           res.redirect('/')
//       })
//   })
// })

// app.post('/signin/facebook', async (req, res) => {
//     console.log('Request -->', req.body.user)

//     try {
//       const response = await axios({
//         method: 'get',
//         url: `https://graph.facebook.com/v6.0/oauth/access_token?grant_type=fb_exchange_token&client_id=771047717101312&client_secret=94480ba4cd991ea93c6c8c87de138c03&fb_exchange_token=${req.body.user.accessToken}`
//       })

//       const result = response.data
//       console.log('Result -->', result)

//       // If (result) --> process signup (new user) / signin (exiting user)
//     } catch (error) {}
// })

app.listen(3001, function (req, res) {
  console.log('Panjai has started!');
});
