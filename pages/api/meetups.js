// api end point: /api/meetups  (file name as with pages)
import {MongoClient} from "mongodb";

const handler = async (req, res) => {
    if (req.method === "GET"){

        const client = await MongoClient.connect(
            "mongodb+srv://kalilginelysacko:a26CRQd24qz00khz@cluster0.ok1ioey.mongodb.net/meetups?retryWrites=true&w=majority"
        );

        const db = client.db();

        /** access to collection */
        const meetupsCollection =  db.collection('meetups');

        /** insert into mongoDB */
        const result = await meetupsCollection.find().toArray();

        await client.close();

        /** send back a response */

        res.status(201).json({ meetups: result, message: "Data fetched successfully!" })
    }
}

/** export api */
export default handler;