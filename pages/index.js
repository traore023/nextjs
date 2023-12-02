import MeetupList from "../components/meetups/MeetupList";
import {useEffect, useState} from "react";

const DUMMY_MEETUPS = [
    {
        id : "M1",
        title : "A first Meetup",
        image : "https://media.istockphoto.com/id/978975308/tr/vekt%C3%B6r/yakla%C5%9Fan-olaylar%C4%B1-neon-i%C5%9Faret-vekt%C3%B6r-yakla%C5%9Fan-olaylar-tasar%C4%B1m-%C5%9Fablonu-neon-tabela-%C4%B1%C5%9F%C4%B1k-afi%C5%9F.jpg?s=612x612&w=is&k=20&c=XgGTB7XKo9FuQgQzbV1ZgTXO88d1n4tPYq7rhNUpk-o=",
        address: "Address 1",
        description : "It is special"
    },
    {
        id : "M2",
        title : "Another Meetup",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvfE0nUL8J_KeuHtRaDCQpF0CkKrLja3JO1qOHh2JbIdVbMWDm9oJf_isw6DQ9e3q2jTo&usqp=CAU",
        address: "Address 2",
        description : "It is nice"
    },
    {
        id : "M3",
        title : "A last Meetup",
        image : "https://www.fotoware.com/hubfs/zachary-staines-65214-unsplash.png",
        address: "Address 3",
        description : "It is super cooool"
    },
]
const HomePage = (props) => {
    return (
        <MeetupList meetups={props.meetups}/>
    )
}

export async function getStaticProps() {
    // do DB connection here, data fetch, etc. Never reaches client machine
    // will be executed on the server, cause it is run during the build process

    return {
        props : {
           meetups: DUMMY_MEETUPS
        },
        revalidate: 10 // 10 seconds (from 1 to *)
    }
}
export default HomePage;