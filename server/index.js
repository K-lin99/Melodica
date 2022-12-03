const express = require('express');
const { default: helmet } = require('helmet');
const morgan = require('morgan');

// importing dotenv
const dotenv = require('dotenv')
dotenv.config()

const port = 8000

const { 
    getRegionalArtists,
    getCallback,
    login,
    getContinents
} = require("./handlers")

express()

    .use(express.json())
    .use(helmet())
    .use(morgan("tiny"))
    // getting artists based on continent and region
    .get("/api/get-artists/:continent/:region", getRegionalArtists)

    .get("/callback", getCallback)

    .get("/login", login)

    .get("/continents", getContinents)



    .listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    });