import React from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import Viewers from "./Viewers";

const Home = () => {
  return (
    <Container>
      <ImageSlider />
      <Viewers />
    </Container>
  );
};

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.4vw + 5px);
  position: relative;
  overflow: hidden;

  &:before {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;
