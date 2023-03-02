import Link from "next/link";
import styled from "styled-components";

const HeaderSection = () => {
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

export default HeaderSection;

const Header = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(to right, #007749, #438eb4);
  padding: 0 10%;
  box-shadow: 0 5px 20px 5px #00663f99;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  color: white;
  font-weight: bold;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }

  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    align-items: baseline;
  }

  & li {
    margin-left: 1.5rem;

    @media (min-width: 768px) {
      margin-left: 3rem;
    }
  }

  & a {
    display: block;
    text-align: center;
    text-decoration: none;
    font-size: 1rem;
    color: #f7fcb8;

    &:hover,
    &:focus,
    &.active {
      color: white;
    }

    @media (min-width: 768px) {
      font-size: 1.2rem;
    }

    @media (min-width: 1024px) {
      font-size: 1.5rem;
    }
  }
`;
