import {connectToDatabase} from "../../../lib/db";

async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({ message: "wrong method" });
    return;
  }
  const client = await connectToDatabase();
  const clinicsCollection = client.db().collection("clinics");

  const clinics = await clinicsCollection.find().toArray();


  client.close();
  res.status(200).json({ message: "success", clinics });
}

export default handler;
