// packages
const express = require('express')
const router = express.Router()

// import URL database Schema
const Url = require('../schema/urlSchema')

// : app.get(/:code)

// @route   GET /:code
// @description Redirect to the original/longUrl
router.get(':/code', async(req,res)=>{
    try{
        // find document match from req.params.code
        const url = await Url.findOne({
            urlCode: req.params.code
        })
        // found -> redirect
        if (url){
            return res.redirect(url.longUrl)
        } else {
            return res.status(404).json('No URL Found!')
        }
    }
    catch(err){
        console.error(err)
        res.status(500).json('Server Error')
    }
})

module.exports = router
