import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { recommendedMovies } from "../api";
import Slider from "react-slick";
import Card from "./Card";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await recommendedMovies();
        setMovies(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  console.log(movies)
  return (
    <Container>
      <h3>Recomended For You</h3>
      <Content {...settings}>
        {movies.map((data) => (
          <Slides id={data.id}>
            <img
              src={`https://image.tmdb.org/t/p/original/${data.poster_path}?api_key=ad0da639ade7e22dd005f4dcabfe5baf`}
              alt="poster"
            />
            <Card  year={data.release_date}/>
          </Slides>
        ))}
      </Content>
    </Container>
  );
};

export default Movies;

const Container = styled.div`
  margin-top: 30px;
`;

const Content = styled(Slider)`
  margin-top: 15px;

  button {
    z-index: 1;
  }

  .slick-list {
    overflow: visible;
  }

`;

const Slides = styled.div`
  cursor: pointer;
  height: 300px;
  img {
    border: 4px solid transparent;
    border-radius: 20px;
    width: 100%;
    height: 100%;
    object-fit: fill;
    transition-duration: 300ms;
    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;
