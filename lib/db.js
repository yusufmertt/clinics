import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://demo1:demo1@cluster0.vvppp.mongodb.net/clinics-app?retryWrites=true&w=majority"
  );

  return client;
}
//    "mongodb://localhost:27017/exampleDb"

