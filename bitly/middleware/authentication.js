const jwt = require('jsonwebtoken');
const fs = require('fs');
const express = require('express');
const public_key = fs.readFileSync('/Users/apple/documents/bootcamp/github/bitly/helpers/key/public.txt', 'utf8');


function authenticated(req, res, next) {
    //get auth header value
    const bearerHeader = req.headers['authorization']
    //check if bearer is undefined
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ')
        const bearerToken = bearer[1]
        req.token = bearerToken
    }
    const decoded = jwt.verify(req.token, public_key)
    req.token = decoded
    next()
}

module.exports = authenticated