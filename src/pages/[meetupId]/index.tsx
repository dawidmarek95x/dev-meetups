import MeetupDetail from "@/components/meetups/MeetupDetail";
import { GetStaticPaths, GetStaticProps } from "next";
import meetupsData from "../../data/meetups.json";

interface Meetup {
  id: string;
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
    <MeetupDetail
      address={meetup?.address ?? ""}
      description={meetup?.description ?? ""}
      image={meetup?.image ?? ""}
      title={meetup?.title ?? ""}
    />
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await meetupsData.map((m) => {
    return {
      params: {
        meetupId: m.id,
      },
    };
  });

  return {
    paths: [...paths],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const meetupId = ctx.params?.meetupId ?? "";
  const meetup = await meetupsData.find((m) => m.id === meetupId);

  return {
    props: {
      meetup,
    },
  };
};

export default MeetupDatails;
