import classes from "./MeetupDetails.module.css";
const MeetupDetails = ({meetup}) => {
    return (
        <section className={classes.detail}>
            <img src={meetup.image} alt="meetup-image"/>
            <h1> {meetup.title} </h1>
            <address>{meetup.address}</address>
            <p>{meetup.description}</p>
        </section>
    )
}

export default MeetupDetails;