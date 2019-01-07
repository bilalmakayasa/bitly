const express = require ('express');
const router = express.Router();
const randomize = require('../helpers/randomize')
const guest = require('../models').guest
const validator = require('valid-url')
const axios = require('axios')


router.get('/',(req, res)=>{
    res.status(200).json({welcome: 'guest'})
})
router.post('/',(req,res)=>{
    const valid = validator.isUri(req.body.url)
    if(valid){
        guest.create({
            short_url: randomize(),
            url: req.body.url
        }).then(result=>{
            res.status(200).json({short_url: result.short_url})
        })
    }else{
        res.status(500).json({error: "please enter right URL"})
    }
})

router.get('/:shorturl', async (req,res) => {
         try {
            const finder = await guest.findOne({where: {short_url: req.params.shorturl}})
             const result = await finder.url
             res.redirect(result)
         } catch (error) {
             res.status(401).json(error.message)
         }
     
 })

module.exports = router