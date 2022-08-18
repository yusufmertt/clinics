import { connectToDatabase } from "./db";

export async function getClinics() {
  const client = await connectToDatabase();
  const db = client.db();

  const clinics = await db.collection("clinics").find().sort({ featured: -1 }).toArray();



  client.close();

  return clinics;
}

export async function getOneClinic(slug) {
  const client = await connectToDatabase();
  const db = client.db();

  const selectedClinic = await db
    .collection("clinics")
    .find({ slug: slug })
    .toArray();

  client.close();

  return selectedClinic;
}
