// pages/api/curriculum.js
import { connectToDatabase } from '../../lib/db';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const { db } = await connectToDatabase();
    const collection = db.collection('curriculum'); // اسم المجموعة

    // جلب جميع المواد
    const subjects = await collection.find({}).toArray();

    res.status(200).json(subjects);
  } catch (error) {
    console.error('Database Error:', error);
    res.status(500).json({ message: 'فشل في جلب البيانات من قاعدة البيانات.', error: error.message });
  }
}
