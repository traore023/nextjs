import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import {useRouter} from "next/router";
import Head from "next/head";

const NewMeetupPage = () => {
    const router = useRouter();

    const addMeetupHandler = async (enteredMeetupData) => {
        const response = await fetch('/api/new-meetup', {
            method: "POST",
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': "application/json"
            }
        });

        const data = await response.json();

        await router.push('/')
    }

    return (
       <>
           <Head>
               <title> Create New Meetups</title>
               <meta name='description' content = 'Here we create amazing meetups!'/>
           </Head>
           <NewMeetupForm onAddMeetup={addMeetupHandler}/></>
    )
}

export default NewMeetupPage;