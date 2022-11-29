// importing Mongo Client
const { MongoClient } = require("mongodb")
// importing dotenv
const dotenv = require('dotenv')

dotenv.config()


const { MONGO_URI } = process.env;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

// returns an array of 5 artists based on a region
const getRegionalArtists = async (req, res) => {
    // declaring specified region
    const {continent} = req.params
    const {region} = req.params;
    // declaring and assigning mongo info to client
    const client = new MongoClient(MONGO_URI, options)
 console.log(continent);
    try {
        // connecting to client
        await client.connect();
        // selecting database
        const db = client.db("Melodica");
        // storing found artists in result variable
        const result = await db.collection("artists").findOne({ Continent: continent })
        // validating result
        if (!result.Region[region]){
            res.status(404).json({ status: 404, message: "Region Not Found"})
        }
        else if (result){
            res.status(200).json({ status: 200, data: result.Region[region]})
        }
        else {
            res.status(404).json({ status: 404, message: "Not Found"})
        }
    }
    // catching and logging errors
    catch (err){
        console.log(err);
        res.status(500).json({ status: 500, message: err.message})
    }
    // closing client
    finally{
        client.close();
    }
}




module.exports = { getRegionalArtists }