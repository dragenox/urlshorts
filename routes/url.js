// packages
const express = require('express')
const validUrl = require('valid-url')
const shortId = require('shortid')

// express route handler
const router = express.Router()

// import URL database schema
const Url = require('../schema/urlSchema')

// @route POST /api/url/shortner
// @description Create short url

// API based Url endpoint
const baseUrl = 'http:localhost:5000'

router.post('/shorten', async(req,res)=>{
    // destructure longUrl from req.body.longUrl
    const {
        longUrl
    } = req.body

    // check base url is valid
    if (!validUrl.isUri(baseUrl)){
        return res.status(401).json('Invalid base URL')
    }

    // if valid
    const urlCode = shortId.generate()

    // check if long url is valid
    if (validUrl.isUri(longUrl)){
        try{
            let url = await Url.findOne({
                longUrl
            })
            // if exists
            if(url){
                res.json(url)
            } else {
                // join shortcode and base url
                const shortUrl = baseUrl + '/' + urlCode

                // save to database
                url = new Url({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date: new Date()
                })
                await url.save()
                res.json(url)
            }
        }
        catch(err){
            console.log(err)
            res.status(500).json('Server Error')
        }
    } else {
        res.status(401).json('Invalid  longUrl')
    }
})

module.exports = router
