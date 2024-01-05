import React from "react";
import styled from "styled-components";

const Viewers = () => {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="viewers" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt="viewers" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="viewers" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt="viewers" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="viewers" />
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
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 80%) 0 44px 35px -16px;
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
