// lib/db.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const dbName = 'EducationDB'; // يجب أن يتطابق مع الاسم في MongoDB Atlas

if (!uri) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local or Vercel settings.'
  );
}

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(uri);
  await client.connect();

  const db = client.db(dbName);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}
