import { dbConnection, dbDisconnection } from "@/services/mongoDb";
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

interface ResponseData {
  message: string;
}

const handler = async (
  req: ExtendedNextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  if (req.method === "POST") {
    try {
      const { title, image, address, description } = req.body;

      if (!title) {
        return res.status(400).json({ message: "Title is required" });
      }

      if (!image) {
        return res.status(400).json({ message: "Image is required" });
      }

      if (!address) {
        return res.status(400).json({ message: "Address is required" });
      }

      if (!description) {
        return res.status(400).json({ message: "Description is required" });
      }
      const meetupsCollection = await dbConnection("dev-meetups");

      const result = await meetupsCollection.insertOne({
        title,
        image,
        address,
        description,
      });

      dbDisconnection();

      return res.status(201).json({ message: "Meetup added successfully!" });
    } catch (err) {
      return res.status(500).json({ message: "Database connection error!" });
    }
  }
};

export default handler;
