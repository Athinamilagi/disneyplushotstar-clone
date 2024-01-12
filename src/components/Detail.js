import React, { useState } from "react";
import styled from "styled-components";

const Detail = () => {
  const [favourite, setFavourite] = useState(true);

  const handleClick = () => {
    setFavourite((prevFavourite) => !prevFavourite);
  };
  return (
    <Container>
      <Background>
        <img
          src={`https://image.tmdb.org/t/p/original/k7rEpZfNPB35FFHB00ZhXHKTL7X.jpg?api_key=ad0da639ade7e22dd005f4dcabfe5baf`}
          alt="poster"
        />
      </Background>
      <MovieImage>
        <img
          src={`https://image.tmdb.org/t/p/original/k7rEpZfNPB35FFHB00ZhXHKTL7X.jpg?api_key=ad0da639ade7e22dd005f4dcabfe5baf`}
          alt="poster"
        />
      </MovieImage>
      <MovieContainer>
        <MovieDetail>
          <Name>
            Snow Of Society<span>(2023)</span>
          </Name>
          <Year>12/15/2023</Year>
          <Genere>Action,Comedy</Genere>
          <Duration>1h59m</Duration>
          <Rating>A</Rating>
          <Description>
            <br />
            <span>Overview</span>
            <br />
            <br />
            Dan Morgan is many things: a devoted husband, a loving father, a
            celebrated car salesman. He's also a former assassin. And when his
            past catches up to his present, he's forced to take his unsuspecting
            family on a road trip unlike any other.
          </Description>
        </MovieDetail>
        <Controls>
          <UserScore>
            <span>74%</span>UserScore
          </UserScore>
          <PlayButton>
            <img src="/images/play-icon-black.png" alt="playbtn" />
            <span>PLAY</span>
          </PlayButton>
          <TrailerButton>
            <img src="/images/play-icon-white.png" alt="playbtn" />
            <span>Trailer</span>
          </TrailerButton>
          <AddButton>
            <span>+</span>
          </AddButton>
          <FavouriteButton>
            <img
              src={
                favourite
                  ? "/images/favourite-icon.png"
                  : "/images/favourite-icon-full.png"
              }
              alt="favouritebtn"
              onClick={handleClick}
            />
          </FavouriteButton>
        </Controls>
      </MovieContainer>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-evenly;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`;

const MovieImage = styled.div`
  height: 50vh;
  width: 20vw;
  min-height: 170px;
  min-width: 200px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const MovieDetail = styled.ul`
  display: grid;
  margin: auto 15px;
  align-items: center;
  font-size: 1em;
  grid-template: repeat(4, 75px) / repeat(5, 125px);
  flex-grow: 1;
`;
const Name = styled.li`
  grid-column: 1 / span 5;
  grid-row: 1 / 1;
  align-items: end;
  font-weight: 600;
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
`;
const Rating = styled.li`
  margin: auto -18px;
  padding: 5px;
  border: 3px solid gray;
  border-radius: 4px;
  color: gray;
  justify-self: flex-start;
`;
const Year = styled.li`
  list-style-type: disc;
  margin: auto;
  font-family: math;
  font-size: 18px;
`;
const Genere = styled.li`
  margin: auto 10px;
  list-style-type: disc;
  font-family: sans-serif;
  font-size: 18px;
`;
const Duration = styled.li`
  margin: auto;
  font-size: 18px;
  list-style-type: disc;
  font-family: math;
`;
const Description = styled.li`
  grid-row: 3 / 3;
  grid-column: 1 / span 5;
  font-family: sans-serif;
  line-height: 1.2;
  letter-spacing: 1px;
  span {
    font-weight: 600;
  }
`;
const Controls = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
const UserScore = styled.div`
  span {
    margin: 5px;
    border: 5px solid green;
    padding: 18px 10px;
    font-family: math;
    font-size: 18px;
    border-radius: 100%;
    display: inline-block;
    position: relative;
    color: black;

    &:before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      background: white;
      border-radius: 50%;
      z-index: -1;
    }

    &:after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      background: green;
      border-radius: 50%;
      z-index: -2;
    }
  }
`;
const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  padding: 0px 24px;
  margin: 0 22px;
  letter-spacing: 1.8px;
  border: none;
  cursor: pointer;
  opacity: 1;
  span {
    color: black;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgb(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  span {
    color: rgb(249, 249, 249);
  }
  text-transform: uppercase;
`;
const AddButton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  margin-right: 15px;
  span {
    font-size: 30px;
  }
`;
const FavouriteButton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
    object-fit: cover;
  }
`;
