import MeetupList from "@/components/meetups/MeetupList";
import { useEffect, useState } from "react";
import meetups from "../data/meetups.json";

interface Meetups {
  id: string;
  title: string;
  image: string;
  address: string;
  description: string;
}

const HomePage = () => {
  const [loadedMeetups, setLoadedMeetups] = useState<Meetups[]>([]);

  useEffect(() => {
    setLoadedMeetups(meetups);
  }, []);

  return <MeetupList meetups={meetups} />;
};

export default HomePage;
