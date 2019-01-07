const express = require('express')
const router = express.Router()
const app = express()
const tracking = require('../models').tracking
const short = require('../models').short

let count = 0
router.get('/:url', async (req,res) => {
   const finder = await short.findOne({where: {short_url: req.params.url}})
        const Tracking = await tracking.create({
            short_url: finder.dataValues.short_url,
            ip_adress: req.ip,
            refferer_url: req.headers.referer
        })

        try {
            count++
            const result = await tracking.findAll({})
            res.status(200).json(result)
        } catch (error) {
            res.status(401).json(error.message)
        }
    
})
module.exports = router