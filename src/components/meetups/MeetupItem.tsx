import Card from "../ui/Card";
import styled from "styled-components";
import { useRouter } from "next/router";

type MeetupItemProps = {
  id: string;
  address: string;
  image: string;
  title: string;
};

const MeetupItem = ({ id, address, image, title }: MeetupItemProps) => {
  const router = useRouter();

  const showDetailsHandler = () => {
    router.push(`/${id}`);
  };

  return (
    <Item>
      <Card>
        <ImageWrapper>
          <img src={image} alt={title} />
        </ImageWrapper>
        <Content>
          <h3>{title}</h3>
          <address>{address}</address>
        </Content>
        <Actions>
          <button onClick={showDetailsHandler}>Show Details</button>
        </Actions>
      </Card>
    </Item>
  );
};

export default MeetupItem;

const Item = styled.li`
  margin: 1rem 0;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 20rem;
  overflow: hidden;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;

  & img {
    width: 100%;
    object-fit: cover;
  }
`;

const Content = styled.div`
  text-align: center;
  padding: 1rem;

  & h3 {
    font-size: 1.25rem;
    color: #2c292b;
  }
`;

const Actions = styled.div`
  padding: 1.5rem;
  text-align: center;

  & button {
    font: inherit;
    cursor: pointer;
    color: #007749;
    border: 1px solid #007749;
    background-color: transparent;
    padding: 0.5rem 1.5rem;
    border-radius: 4px;

    &:hover,
    &:active {
      background-color: #f0ffe2;
    }
  }
`;
