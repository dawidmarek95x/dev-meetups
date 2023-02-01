import MeetupList from "@/components/meetups/MeetupList";
import meetups from "../data/meetups.json";

function HomePage() {
  return <MeetupList meetups={meetups} />;
}

export default HomePage;
