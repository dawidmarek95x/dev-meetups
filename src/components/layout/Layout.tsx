import HeaderSection from "./HeaderSection";
import { ReactNode } from "react";
import styled from "styled-components";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/dev-meetups.ico" />
      </Head>
      <HeaderSection />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;

const Main = styled.main`
  margin: 3rem auto;
  width: 90%;
  max-width: 40rem;
`;
