import React from "react";
import styled from "styled-components";

const Viewers = () => {
  const handleHover = (video) => {
    video.play();
  };

  const handleLeave = (video) => {
    video.pause();
  };

  return (
    <Container>
      <Wrap
        onMouseEnter={(e) =>
          handleHover(e.currentTarget.querySelector("video"))
        }
        onMouseLeave={(e) =>
          handleLeave(e.currentTarget.querySelector("video"))
        }
      >
        <img src="/images/viewers-disney.png" alt="viewers" />
        <video loop muted>
          <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Wrap>
      <Wrap
        onMouseEnter={(e) =>
          handleHover(e.currentTarget.querySelector("video"))
        }
        onMouseLeave={(e) =>
          handleLeave(e.currentTarget.querySelector("video"))
        }
      >
        <img src="/images/viewers-pixar.png" alt="viewers" />
        <video id="video" loop muted>
          <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Wrap>
      <Wrap
        onMouseEnter={(e) =>
          handleHover(e.currentTarget.querySelector("video"))
        }
        onMouseLeave={(e) =>
          handleLeave(e.currentTarget.querySelector("video"))
        }
      >
        <img src="/images/viewers-marvel.png" alt="viewers" />
        <video id="video" loop muted>
          <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Wrap>
      <Wrap
        onMouseEnter={(e) =>
          handleHover(e.currentTarget.querySelector("video"))
        }
        onMouseLeave={(e) =>
          handleLeave(e.currentTarget.querySelector("video"))
        }
      >
        <img src="/images/viewers-starwars.png" alt="viewers" />
        <video id="video" loop muted>
          <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Wrap>
      <Wrap
        onMouseEnter={(e) =>
          handleHover(e.currentTarget.querySelector("video"))
        }
        onMouseLeave={(e) =>
          handleLeave(e.currentTarget.querySelector("video"))
        }
      >
        <img src="/images/viewers-national.png" alt="viewers" />
        <video id="video" loop muted>
          <source
            src="/videos/1564676296-national-geographic.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </Wrap>
    </Container>
  );
};

export default Viewers;

const Container = styled.div`
  margin-top: 25px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 10px;
  cursor: pointer;
  border: solid 3px rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 4px 30px 18px -5px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 2;
  }

  video {
    width: 100%;
    height: 100%;
    z-index: -1;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    display: none;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 80%) 0 44px 35px -16px;
    border-color: rgba(249, 249, 249, 0.8);

    video{
      display:block;
    }
  }
`;
