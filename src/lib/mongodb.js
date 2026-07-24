import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || 'Orbillo';

if (!uri) {
    throw new Error('Please define the MONGODB_URI environment variable in .env.local');
}

const options = {};

// Reuse the MongoClient across hot-reloads in development and across
// serverless invocations in production to avoid exhausting connections.
let client;
let clientPromise;

if (process.env.NODE_ENV === 'development') {
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

export default clientPromise;

export async function getDb() {
    const connectedClient = await clientPromise;
    return connectedClient.db(dbName);
}

// Collection used to store all blog posts.
export async function getBlogsCollection() {
    const db = await getDb();
    return db.collection('blogs');
}
