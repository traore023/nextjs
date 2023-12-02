import MeetupDetails from "../../../components/meetups/MeetupDetails";
import {MongoClient} from "mongodb";

const testMeetup = {
    id : "M1",
    title : "A first Meetup",
    image : "https://media.istockphoto.com/id/978975308/tr/vekt%C3%B6r/yakla%C5%9Fan-olaylar%C4%B1-neon-i%C5%9Faret-vekt%C3%B6r-yakla%C5%9Fan-olaylar-tasar%C4%B1m-%C5%9Fablonu-neon-tabela-%C4%B1%C5%9F%C4%B1k-afi%C5%9F.jpg?s=612x612&w=is&k=20&c=XgGTB7XKo9FuQgQzbV1ZgTXO88d1n4tPYq7rhNUpk-o=",
    address: "Address 1",
    description : "It is special"
};
const MeetupDetailPage = ({meetup}) => {
    return (
        <MeetupDetails meetup={meetup}/>
    )
}

export const getStaticPaths  = async () => {
    const client = await MongoClient.connect(
        "mongodb+srv://kalilginelysacko:a26CRQd24qz00khz@cluster0.ok1ioey.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();

    /** access to collection */
    const meetupsCollection =  db.collection('meetups');

    /** find: first param is filtering criteria, second is fields to be extracted*/
    const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();

    return {
        fallback: true,  // tells react all the supported paths are in this paths array, others will give 404 error
        paths: [
            {
                params: {
                    meetupID: 'M1'
                }
            },
            {
                params: {
                    meetupID: 'M2'
                }
            },
            {
                params: {
                    meetupID: 'M3'
                }
            }
        ]
    }
}
export const getStaticProps = async (context) => {
  // fetch meetup data here

    const response = await fetch('http://localhost:3000/api/meetups/'); //api/meetups.js file
    const data = await response.json();

    const meetupID = context.params.meetupID; // meetupId is the dynamic page identifier [meetupID]

    return {
        props: {
            meetup: {
                ...testMeetup,
                id: meetupID
            }
        }
    }
}


export default MeetupDetailPage;