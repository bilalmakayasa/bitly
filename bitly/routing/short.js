const express = require ('express');
const router = express.Router();
const short = require('../models').short
const randomize = require('../helpers/randomize')
const authenticated = require('../middleware/authentication')
const User = require('../models').User
const jwt_decode = require('jwt-decode')

router.get('/',authenticated,(req,res)=>{
    console.log('ini req token' + req.token)
    short.findAll({where:{user_id:req.token.id}}).then(result=>{
        res.json(result)
    })
})

router.post('/',authenticated,(req,res)=>{
    console.log(req.body)
        short.create({
            short_url: req.body.short_url || randomize(),
            url:req.body.url,
            user_id:req.token.id
        })
            .then(res =>{
                result.status(200).json({
                    message:"URL has been created",
                    result,
                })
            })
            .catch(error=>{
                res.status(401).json({
                    error: "error"
                })
            })
    })
module.exports = router