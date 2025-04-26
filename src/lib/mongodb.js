import { MongoClient } from "mongodb";

// MongoDB URI from .env.local 
const uri = process.env.MONGODB_URI; 
const options = {};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
    throw new Error('Please add your Mongo URI to .env.local');
}

if(process.env.NODE_ENV === 'development') {
    if(!global._mongoClientPromise) {
        client = new MongoClient(uri, options);
        global._mongoClientPromise = client.connect();
        console.log('✅ Connected to MongoDB (development)');
        // global._mongoClientPromise = MongoClient.connect(uri);
    }
    clientPromise = global._mongoClientPromise;
} else {
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
    console.log('✅ Connected to MongoDB (production)');
    // clientPromise = MongoClient.connect(uri);
}

export default clientPromise;