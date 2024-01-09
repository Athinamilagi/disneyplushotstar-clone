import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { recommendedMovies } from "../api";
import Slider from "react-slick";
import Card from "./Card";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [hoveredSlide, setHoveredSlide] = useState(null);

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

  const handleHover = (index) => {
    setHoveredSlide(index);
  };

  const handleLeave = () => {
    setHoveredSlide(null);
  };

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          initialSlide: 0,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: false,
        },
      },
    ],
  };

  return (
    <Container>
      <h3>Recommended For You</h3>
      <Content {...settings}>
        {movies.map((data, index) => (
          <SlideContainer
            key={data.id}
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={handleLeave}
          >
            <img
              src={`https://image.tmdb.org/t/p/original/${data.poster_path}?api_key=ad0da639ade7e22dd005f4dcabfe5baf`}
              alt="poster"
            />
            {hoveredSlide === index && (
              <CardContainer>
                <Card
                  imageUrl={`https://image.tmdb.org/t/p/original/${data.poster_path}?api_key=ad0da639ade7e22dd005f4dcabfe5baf`}
                  title={data.original_title}
                  description={data.overview}
                  date={data.release_date}
                />
              </CardContainer>
            )}
          </SlideContainer>
        ))}
      </Content>
    </Container>
  );
};

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

const SlideContainer = styled.div`
  cursor: pointer;
  position: relative;
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

const CardContainer = styled.div`
  position: absolute;
  top: 0;
  left: -25px;
  width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #040714;
  border-radius: 20px;
  z-index: 1;
`;

export default Movies;
