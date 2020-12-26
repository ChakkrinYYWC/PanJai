const express = require('express')
var router = express.Router()
var ObjectID = require('mongoose').Types.ObjectId

var { PostPanjai } = require('../model/postPanjai')

router.get('/', (req, res)=>{
    PostPanjai.find((err, docs)=>{
        if (!err) 
            res.send(docs)
        else 
            console.log('Error #1 : ' + JSON.stringify(err, undefined, 2))
    })
})

router.post('/', (req, res) => {
    var newRecord = new PostPanjai({
        title: req.body.title,
        message: req.body.message
    })
    console.log(newRecord)
    newRecord.save((err, docs) => {
        if (!err) 
            res.send(docs)
        else 
            console.log('Error #2 : ' + JSON.stringify(err, undefined, 2))
    })
})

router.put('/:id', (req, res)=>{
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('No record with given id : ' + req.params.id)

    var updatedRecord = {
        title: req.body.title,
        message: req.body.message
    }

    PostPanjai.findByIdAndUpdate(req.params.id, { $set: updatedRecord }, {new:true}, (err, docs)=>{
        if (!err) 
            res.send(docs)
        else 
            console.log('Error #3 : ' + JSON.stringify(err, undefined, 2))
    })
})

router.delete('/:id', (req, res)=>{
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('No #4 : ' + req.params.id)

    PostPanjai.findByIdAndRemove(req.params.id, (err, docs)=>{
        if (!err) 
            res.send(docs)
        else 
            console.log('Error #5 : ' + JSON.stringify(err, undefined, 2))
    })
})

module.exports = router