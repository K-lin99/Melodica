const express = require('express');
const { default: helmet } = require('helmet');
const morgan = require('morgan');

// importing dotenv
const dotenv = require('dotenv')
dotenv.config()

const port = 8000

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const REDIRECT_URI = process.env.REDIRECT_URI

const { 
    getRegionalArtists,
    getCallback,
    login
} = require("./handlers")

express()

    .use(express.json())
    .use(helmet())
    .use(morgan("tiny"))
    // getting artists based on continent and region
    .get("/api/get-artists/:continent/:region", getRegionalArtists)

    .get("/callback", getCallback)

    .get("/login", login)



    .listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    });