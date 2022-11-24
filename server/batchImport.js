const { MongoClient } = require("mongodb")

require("dotenv").config();
const { MONGO_URI} = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

const batchImport = async () => {
    // creating new client
    const client = new MongoClient(MONGO_URI, options)

    try {
        // connecting to client
        await client.connect();
        // declaring the database
        const db = client.db("Melodica");
        // creating users collection
        await db.collection("users");
        // creating favorites collection
        await db.collection("favorites");
        // creating playlists collection
        await db.collection("playlists");
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