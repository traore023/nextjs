import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";

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

    const response = await fetch('http://localhost:3000/api/meetups'); //api/meetups.js file
    const data = await response.json();

    return {
        props : {
           meetups: data.meetups.map(meetup => ({
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