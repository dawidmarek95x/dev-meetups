import MeetupDetail from "@/components/meetups/MeetupDetail";
import { useRouter } from "next/router";
import meetups from "../../data/meetups.json";

const MeetupDatails = () => {
  const router = useRouter();
  const meetupId = router.query.meetupId;
  const meetupData = meetups.find((m) => m.id === meetupId);

  return (
    <MeetupDetail
      address={meetupData?.address ?? ""}
      description={meetupData?.description ?? ""}
      image={meetupData?.image ?? ""}
      title={meetupData?.title ?? ""}
    />
  );
};

export default MeetupDatails;
