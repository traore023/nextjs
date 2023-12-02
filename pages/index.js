import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";
import {MongoClient} from "mongodb";

const HomePage = (props) => {
    return (
        <>
            <Head>
                <title> React Meetups</title>
                <meta name='description' content = 'Browse a huge list of highly active React meetups!'/>
            </Head>
            <MeetupList meetups={props.meetups}/>
        </>
    )
}

// export async function getServerSideProps() {
//     // fetch data from any data source
//     return {
//         props : {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }

export async function getStaticProps() {
    // do DB connection here, data fetch, etc. Never reaches client machine
    // will be executed on the server, because it is run during the build process

    const client = await MongoClient.connect(
        "mongodb+srv://kalilginelysacko:a26CRQd24qz00khz@cluster0.ok1ioey.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();

    /** access to collection */
    const meetupsCollection =  db.collection('meetups');

    /** insert into mongoDB */
    const meetups = await meetupsCollection.find().toArray();

    await client.close();


    return {
        props : {
           meetups: meetups.map(meetup => ({
               title: meetup.title,
               image: meetup.image,
               address: meetup.address,
               id: meetup._id.toString()
           }))
        },
        revalidate: 10 // 10 seconds (from 1 to *)
    }
}
export default HomePage;