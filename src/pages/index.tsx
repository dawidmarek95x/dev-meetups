import MeetupList from "@/components/meetups/MeetupList";
import { GetServerSideProps, GetStaticProps } from "next";
import meetupsData from "../data/meetups.json";

interface Meetup {
  id: string;
  title: string;
  image: string;
  address: string;
  description: string;
}
interface HomePageProps {
  meetups: Meetup[];
}

const HomePage = ({ meetups }: HomePageProps) => {
  return <MeetupList meetups={meetups} />;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      meetups: meetupsData,
    },
    revalidate: 1,
  };
};

export default HomePage;
