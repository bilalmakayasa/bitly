const express = require ('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const User = require('../models').User
const jwt = require('jsonwebtoken')
const fs =require('fs')
const private_key = fs.readFileSync('/Users/apple/documents/bootcamp/github/bitly/helpers/key/private.txt', 'utf8')

router.post('/', (req,res)=>{
    User.findOne({where: {email: req.body.email}}).then(function(user){
        bcrypt.compare(req.body.password,user.password, function (err, result){
            if(err){
                return res.status(500).json({
                    message:"please enter correct password"
                })
            }

            if(result){
               const token = jwt.sign({
                   id: user.id,
                    email: user.email
                },
                private_key,
                {
                    algorithm: 'RS256'
                })
                return res.status(200).json({
                    message: "welcome!!",
                    token : token,
                    result: result,
                    id: user.id,
                    email: user.email
                })
            }else{
                return res.status(500).json({
                    message:"wrong"
                })
            }
            
           
        })
    })
    .catch(error=>{
        res.status(500).json({
            error: error
        })
    })
})

module.exports=router