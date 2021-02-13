const express = require('express')
const router = express.Router();
const Pandat = require('../models/model')
router.get('/pandat', (req, res) => {
    res.send({ type: 'GET' })
})

router.post('/pandat', (req, res) => {
    Pandat.create(req.body)
        .then((pandat) => {
            res.send(pandat)
        })
        .catch((err)=>res.send(err))
})

router.put('/pandat/:id', (req, res) => {
    Pandat.findByIdAndUpdate({_id:req.params.id},req.body)
        .then(() =>{
                Pandat.findOne({_id:req.params.id})
                .then((pandat)=>{
                    res.send(pandat)
                })
            })
        })

router.delete('/pandat/:id', (req, res) => {
    Pandat.findByIdAndDelete({_id:req.params.id})
        .then((pandat)=>{
            res.send(pandat)
        })
})

module.exports = router;