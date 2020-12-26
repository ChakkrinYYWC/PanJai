const   mongoose = require('mongoose')

var PostPanjai = mongoose.model('PostPanjai',{
    title : String,
    message : String,
},'PostPanjai')

module.exports = { PostPanjai }