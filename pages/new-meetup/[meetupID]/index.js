import MeetupDetails from "../../../components/meetups/MeetupDetails";
import {MongoClient, ObjectId} from "mongodb";
import Head from "next/head";

const MeetupDetailPage = ({meetup}) => {
    return (
        <>
            <Head>
                <title> { meetup.title }</title>
                <meta name='description' content = {meetup.description} />
            </Head>
            <MeetupDetails meetup={meetup}/>
        </>
    )
}

export const getStaticPaths  = async () => {
    /** those credentials will never be exposed */
    const client = await MongoClient.connect(
        "mongodb+srv://kalilginelysacko:a26CRQd24qz00khz@cluster0.ok1ioey.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();

    /** access to collection */
    const meetupsCollection =  db.collection('meetups');

    /** find: first param is filtering criteria, second is fields to be extracted*/
    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

    await client.close();

    return {
        fallback: false,  // tells react all the supported paths are in this paths array, others will give 404 error

        /** paths dynamic generation*/
        paths: meetups.map(meetup => (
            { params: { meetupID : meetup._id.toString() } } // meetupID as declared in the folder [meetupID]
        )),
    }
}

export const getStaticProps = async (context) => {
  // fetch meetup data here

    const meetupID = context.params.meetupID; // meetupId is the dynamic page identifier [meetupID]

    const client = await MongoClient.connect(
        "mongodb+srv://kalilginelysacko:a26CRQd24qz00khz@cluster0.ok1ioey.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();

    /** access to collection */
    const meetupsCollection =  db.collection('meetups');

    /** find: first param is filtering criteria, second is fields to be extracted*/
    const meetup = await meetupsCollection.findOne({_id: new ObjectId(meetupID)});

    await client.close();

    return {
        props: {
            meetup: {
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                description: meetup.description,
                id: meetup._id.toString()
            }
        }
    }
}


export default MeetupDetailPage;