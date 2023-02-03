import MeetupItem from "./MeetupItem";
import styled from "styled-components";

interface Meetup {
  id: string;
  address: string;
  image: string;
  title: string;
}

interface MeetupListProps {
  meetups: Meetup[];
}

const MeetupList = ({ meetups }: MeetupListProps) => {

  return (
    <List>
      {meetups.map((meetup: Meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </List>
  );
};

export default MeetupList;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
