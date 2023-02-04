import MeetupDetail from "@/components/meetups/MeetupDetail";
import { dbConnection, dbDisconnection } from "@/services/mongoDb";
import { ObjectId } from "mongodb";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

interface Meetup {
  _id: string;
  title: string;
  image: string;
  address: string;
  description: string;
}

interface MeetupDetailsProps {
  meetup: Meetup;
}

const MeetupDatails = ({ meetup }: MeetupDetailsProps) => {
  return (
    <>
      <Head>
        <title>{meetup.title}</title>
        <meta name="description" content={meetup.description} />
      </Head>
      <MeetupDetail
        address={meetup.address}
        description={meetup.description}
        image={meetup.image}
        title={meetup.title}
      />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const meetupsCollection = await dbConnection("dev-meetups");
  const meetupsData = await meetupsCollection.find().toArray();
  dbDisconnection();

  const paths = await meetupsData.map((meetup) => ({
    params: {
      meetupId: meetup._id.toString(),
    },
  }));

  return {
    paths: [...paths],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  let meetupId = ctx.params?.meetupId ?? "";
  if (Array.isArray(meetupId)) {
    meetupId = meetupId.join("");
  }

  const meetupsCollection = await dbConnection("dev-meetups");
  const query = { _id: new ObjectId(meetupId) };
  const meetupData = await meetupsCollection.findOne(query);
  dbDisconnection();

  return {
    props: {
      meetup: {
        ...meetupData,
        _id: meetupId,
      },
    },
  };
};

export default MeetupDatails;
