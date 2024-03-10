import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { certification, getMovies, imageUrl, videoUrl } from "../api";

const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [favourite, setFavourite] = useState(true);
  const [showTrailer, setShowTrailer] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");

  const trailerRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMovies(id);
        setMovie({
          adult: data.adult,
          backdrop_path: data.backdrop_path,
          genre_ids: data.genres.map((genre) => genre.name),
          id: data.id,
          duration: convertToHoursAndMinutes(data.runtime),
          original_language: data.original_language,
          original_title: data.original_title,
          overview: data.overview,
          popularity: data.popularity,
          image: await imageUrl(data.poster_path),
          release_date: data.release_date,
          title: data.title,
          video: await videoUrl(data.id),
          vote_average: data.vote_average,
          vote_count: data.vote_count,
          rating: await certification(data.id),
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);
  console.log(movie?.video);
  const convertToHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${hours}h ${minutes}min`;
  };
  const handleClick = () => {
    setFavourite((prevFavourite) => !prevFavourite);
  };

  const handleTrailerButtonClick = () => {
    setVideoSrc(movie?.video?.key);
    setShowTrailer(true);
  };

  const handleTrailerClose = (e) => {
    if (trailerRef.current && !trailerRef.current.contains(e.target)) {
      setVideoSrc("");
      setShowTrailer(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleTrailerClose);

    return () => {
      document.removeEventListener("mousedown", handleTrailerClose);
    };
  }, []);

  return (
    movie ? (
    <Container>
      <Background>
        <Center>
          <img src={movie?.image} alt="poster" />
        </Center>
      </Background>
      <MovieImage>
        <img src={movie?.image} alt="poster" />
      </MovieImage>
      <MovieContainer>
        <MovieDetail>
          <Name>{movie?.title}</Name>
          <Year>{movie?.release_date}</Year>
          <Genere>
            {movie?.genre_ids?.map((data, index) => (
              <React.Fragment key={index}>
                {index > 0 && ", "} {data}
              </React.Fragment>
            ))}
          </Genere>
          <Duration>{movie?.duration}</Duration>
          {movie.rating && <Rating>{movie?.rating}</Rating>}
          <Description>
            <br />
            <span>Overview</span>
            <br />
            <br />
            {movie?.overview}
          </Description>
        </MovieDetail>
        <Controls>
          <UserScore>
            <span>{(movie?.vote_average * 1).toFixed(1)}%</span>UserScore
          </UserScore>
          <PlayButton>
            <img src="/images/play-icon-black.png" alt="playbtn" />
            <span>PLAY</span>
          </PlayButton>
          <TrailerButton onClick={handleTrailerButtonClick}>
            <img src="/images/play-icon-white.png" alt="playbtn" />
            <span>Trailer</span>
          </TrailerButton>
          <AddButton>
            <span>+</span>
          </AddButton>
          <FavouriteButton>
            <img
              src={favourite ? "/images/star-icon.png" : "/images/star.png"}
              alt="favouritebtn"
              onClick={handleClick}
            />
          </FavouriteButton>
        </Controls>
      </MovieContainer>
      {movie?.video?.key && (
        <TrailerFrame showTrailer={showTrailer} ref={trailerRef}>
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoSrc}`}
            title={movie?.video?.name}
            className="embed hide"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <CloseButton onClick={() => setShowTrailer(false)}>Close</CloseButton>
        </TrailerFrame>
      )}
    </Container>
) : (
  <h2>Loading....</h2>
)
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
  z-index: 0;
`;

const Background = styled.div`
  opacity: 0.6;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

const Center = styled.div`
  width: 100vw;
  height: 200vh;

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
  grid-template: repeat(4, 75px) / repeat(5, 155px);
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
  border: 3px solid rgba(0, 0, 0, 0.8);
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.8);
  justify-self: flex-start;
`;
const Year = styled.li`
  list-style-type: disc;
  margin: auto;
  font-family: math;
  font-size: 1em;
`;
const Genere = styled.li`
  margin: auto 10px;
  list-style-type: disc;
  font-family: sans-serif;
  font-size: 1em;
`;
const Duration = styled.li`
  margin-left: 15px;
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

const TrailerFrame = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid black;
  height: 70vh;
  width: 70vw;
  z-index: ${(props) => (props.showTrailer ? "2" : "-1")};
  border-radius: 10px;
  display: ${(props) => (props.showTrailer ? "block" : "none")};
`;

const CloseButton = styled.button`
  position: absolute;
  top: -15px;
  right: -20px;
  color: black;
  border: none;
  padding: 5px;
  cursor: pointer;
`;
