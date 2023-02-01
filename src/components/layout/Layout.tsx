import MainNavigation from "./MainNavigation";
import { ReactNode } from "react";
import styled from "styled-components";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <MainNavigation />
      <Main>{children}</Main>
    </div>
  );
};

export default Layout;

const Main = styled.main`
  margin: 3rem auto;
  width: 90%;
  max-width: 40rem;
`;
