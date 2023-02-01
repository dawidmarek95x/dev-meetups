import Link from "next/link";
import styled from "styled-components";

const MainNavigation = () => {
  return (
    <Header>
      <Logo>Dev Meetups</Logo>
      <nav>
        <NavList>
          <li>
            <Link href="/">All Meetups</Link>
          </li>
          <li>
            <Link href="/new-meetup">Add New Meetup</Link>
          </li>
        </NavList>
      </nav>
    </Header>
  );
};

export default MainNavigation;

const Header = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #007749;
  padding: 0 10%;
`;

const Logo = styled.div`
  font-size: 2rem;
  color: white;
  font-weight: bold;
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: baseline;

  & li {
    margin-left: 3rem;
  }

  & a {
    text-decoration: none;
    font-size: 1.5rem;
    color: #f7fcb8;

    &:hover,
    &:focus,
    &.active {
      color: white;
    }
  }
`;
