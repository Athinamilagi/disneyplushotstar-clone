import React from "react";
import styled from "styled-components";

const Detail = () => {
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
      <MovieDetail>
        <Name>
          Snow Of Society<span>(2023)</span>
        </Name>
        <Rating>A</Rating>
        <Year>12/15/2023</Year>
        <Genere>Action,Comedy</Genere>
        <Duration>1h59m</Duration>
      </MovieDetail>
      <Controls>
        <UserScore>
          74%<span>UserScore</span>
        </UserScore>
        <PlayButton></PlayButton>
        <TrailerButton></TrailerButton>
        <AddButton></AddButton>
        <FavouriteButton></FavouriteButton>
      </Controls>
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
  flex-wrap: nowrap;
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

const MovieImage = styled.div`
  height: 50vh;
  width: 20vw;
  min-height: 170px;
  min-width: 200px;
  margin-top: 10vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const MovieDetail = styled.div``;
const Name = styled.p``;
const Rating = styled.p``;
const Year = styled.p``;
const Genere = styled.p``;
const Duration = styled.p``;
const Controls = styled.div``;
const UserScore = styled.div``;
const PlayButton = styled.div``;
const TrailerButton = styled.div``;
const AddButton = styled.div``;
const FavouriteButton = styled.div``;
