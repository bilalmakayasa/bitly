const express = require ('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const User = require('../models').User

router.get('/', (req, res) => {
    User.findAll({
    }).then(result => {
    res.json(result)
    })
})

router.post('/', (req,res)=>{
    bcrypt.hash(req.body.password, 10, function(err, hash) {
        const user = new User({
            email: req.body.email,
            password: hash
        })
            user.save().then(result=>{
                res.status(200).json({success: 'new user has been registered'})
            })
            .catch(function (error){
                res.status(500).json({mesage:"enter another email"})  
        })
      });
})
module.exports=router