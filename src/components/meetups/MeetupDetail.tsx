import React from "react";
import styled from "styled-components";

interface MeetupDataProps {
  address: string;
  image: string;
  title: string;
  description: string;
}

const MeetupDetail = ({
  address,
  image,
  title,
  description,
}: MeetupDataProps) => {
  return (
    <Detail>
      <img src={image} alt={address} />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </Detail>
  );
};

export default MeetupDetail;

const Detail = styled.section`
  text-align: center;

  & img {
    width: 100%;
  }
`;
