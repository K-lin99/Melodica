const { MongoClient } = require("mongodb")
const { artists } = require("./data");

require("dotenv").config();
const { MONGO_URI} = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

const batchImport = async () => {
    // creating new client
    const client = new MongoClient(MONGO_URI, options);

    try {
        // connecting to client
        await client.connect();
        // declaring the database
        const db = client.db("Melodica");
        // creating artist collection
        const artistsCollection = db.collection("artists");
        // inserting artist data to collection
        await artistsCollection.insertMany(artists);
    }
    catch(err) {
        // show error in console
        console.log(err);
    }
    finally {
        // disconnecting from client
        client.close()
    }
};

batchImport();