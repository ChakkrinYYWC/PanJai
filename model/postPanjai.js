const   mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose');

var PostPanjai = mongoose.model('PostPanjai',{
    title : String,
    message : String,
    Timestamp : { type: Date, default: Date.now },
    image: String,
    contect: String,
    location:String
},'PostPanjai')


module.exports = { PostPanjai }