import { MongoClient } from 'mongodb';

// Replace the uri string with your MongoDB deployment's connection string.
const URI = process.env.MONGODB_URI
const options = {}

if (!URI) throw new Error ('Please add your Mongo URI to .env.local')

let client = new MongoClient(URI, options)
let clientPromise

if (process.env.NODE_ENV !== 'production') {
    if (!global._mongoClientPromise) {
        global._mongoClientPromise = client.connect()
    }

    clientPromise = global._mongoClientPromise
} else {
    clientPromise = client.connect()
}

export default clientPromise