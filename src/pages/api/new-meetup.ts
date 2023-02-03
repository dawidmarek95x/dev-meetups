import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

interface Data {
  title: string;
  image: string;
  address: string;
  description: string;
}

interface ExtendedNextApiRequest extends NextApiRequest {
  body: Data;
}

interface SuccessResponseData {
  message: string;
}

type ResponseData = SuccessResponseData | string;

const handler = async (
  req: ExtendedNextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  if (req.method === "POST") {
    try {
      const { title, image, address, description } = req.body;

      if (!title) {
        return res.status(400).send("title is required");
      }

      if (!image) {
        return res.status(400).send("image is required");
      }

      if (!address) {
        return res.status(400).send("address is required");
      }

      if (!description) {
        return res.status(400).send("description is required");
      }

      const client = await MongoClient.connect(process.env.DB_HOST!);
      const db = client.db();

      const meetupsCollection = db.collection("dev-meetups");

      const result = await meetupsCollection.insertOne({
        title,
        image,
        address,
        description,
      });

      client.close();

      return res.status(201).json({ message: "Meetup added successfully!" });
    } catch (err) {
      return res.status(500).json({ message: "Database connection error!" });
    }
  }
};

export default handler;
