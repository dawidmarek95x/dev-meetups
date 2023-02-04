import { MongoClient } from "mongodb";

const clientConnection = async () =>
  await MongoClient.connect(process.env.DB_HOST!);

export const dbConnection = async (collectionName: string) => {
  const client = await clientConnection();
  const db = client.db();

  return db.collection(collectionName);
};

export const dbDisconnection = async () => {
  const client = await clientConnection();
  return client.close();
};
