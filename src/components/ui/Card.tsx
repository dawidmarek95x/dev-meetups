import { ReactNode } from 'react';
import styled from 'styled-components';

interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps) => {
  return <StylizedCard>{children}</StylizedCard>;
}

export default Card;

const StylizedCard = styled.div`
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;
