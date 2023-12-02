// api end point: /api/new-meetup  (file name as with pages)
import {MongoClient} from "mongodb";

const handler = async (req, res) => {
    if (req.method === "POST"){
        const data = req.body;

        const client = await MongoClient.connect(
            "mongodb+srv://kalilginelysacko:a26CRQd24qz00khz@cluster0.ok1ioey.mongodb.net/meetups?retryWrites=true&w=majority"
        );

        const db = client.db();

        /** access to collection */
        const meetupsCollection =  db.collection('meetups');

        /** insert into mongoDB */
        const result = await meetupsCollection.insertOne(data);

        await client.close();

        /** send back a response */

        res.status(201).json({ message: "Meetup inserted!" })
    }
}

/** export api */
export default handler;