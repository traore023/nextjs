import MeetupDetails from "../../../components/meetups/MeetupDetails";

const meetup = {
    id : "M1",
    title : "A first Meetup",
    image : "https://media.istockphoto.com/id/978975308/tr/vekt%C3%B6r/yakla%C5%9Fan-olaylar%C4%B1-neon-i%C5%9Faret-vekt%C3%B6r-yakla%C5%9Fan-olaylar-tasar%C4%B1m-%C5%9Fablonu-neon-tabela-%C4%B1%C5%9F%C4%B1k-afi%C5%9F.jpg?s=612x612&w=is&k=20&c=XgGTB7XKo9FuQgQzbV1ZgTXO88d1n4tPYq7rhNUpk-o=",
    address: "Address 1",
    description : "It is special"
};
const MeetupDetailPage = () => {

    return (
        <MeetupDetails meetup={meetup}/>
    )
}

export default MeetupDetailPage;