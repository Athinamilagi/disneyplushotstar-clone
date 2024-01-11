import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <>
      <Container>
        <Logo>
          <img src="/images/logo.svg" alt="logo" />
        </Logo>
        <NavMenu>
          <li>
            <a href="home">
              <img src="/images/home-icon.svg" alt="home-icon" />
              <span>home</span>
            </a>
          </li>
          <li>
            <a href="/">
              <img src="/images/search-icon.svg" alt="search-icon" />
              <span>Search</span>
            </a>
          </li>
          <li>
            <a href="/">
              <img src="/images/watchlist-icon.svg" alt="watchlist-icon" />
              <span>watchlist</span>
            </a>
          </li>
          <li>
            <a href="/">
              <img src="/images/original-icon.svg" alt="original-icon" />
              <span>originals</span>
            </a>
          </li>
          <li>
            <a href="/">
              <img src="/images/movie-icon.svg" alt="movies-icon" />
              <span>movies</span>
            </a>
          </li>
          <li>
            <a href="/">
              <img src="/images/series-icon.svg" alt="series-icon" />
              <span>series</span>
            </a>
          </li>
        </NavMenu>
        <Link to="/login">
          <Profile src="/images/podcast.png" />
        </Link>
      </Container>
      <Outlet />
    </>
  );
}

export default Header;

const Container = styled.div`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  padding: 0 36px;
  justify-content: space-between;
  overflow: hidden;
`;

const Logo = styled.div`
  img {
    width: 80px;
  }
`;
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        position: absolute;
        left: 0;
        bottom: -6px;
        right: 0;
        background-color: white;
        opacity: 0;
        transform: scaleX(0);
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
const Profile = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
