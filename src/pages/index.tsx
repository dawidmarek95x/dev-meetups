import MeetupList from "@/components/meetups/MeetupList";
import { GetStaticProps } from "next";
import { dbConnection, dbDisconnection } from "@/services/mongoDb";
import Head from "next/head";

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
  return (
    <>
      <Head>
        <title>Dev Meetups</title>
        <meta
          name="description"
          content="Find many great meetups dedicated to developers around the world."
        />
      </Head>
      <MeetupList meetups={meetups} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const meetupsCollection = await dbConnection("dev-meetups");
  const meetupsData = await meetupsCollection.find().toArray();
  dbDisconnection();

  return {
    props: {
      meetups: meetupsData.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
};

export default HomePage;
