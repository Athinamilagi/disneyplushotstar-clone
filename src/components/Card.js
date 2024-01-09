import React from "react";
import styled from "styled-components";

const Card = (props) => {
  console.log(props);
  const handleHover = (video) => {
    video.play();
  };

  const handleLeave = (video) => {
    video.pause();
  };
  return (
    <CardWrapper>
      <Wrap>
        <img src={props.imageUrl} alt="poster" />
      </Wrap>
      <Content>
        <ButtonComponent>
          <button id="one">Watch Now</button>
          <button id="two">+</button>
        </ButtonComponent>
        Overview :- <br />
        <Date>
          <span>Year: </span>
          {props.date}
        </Date>
        <Description>
          <span>Title: {props.title}</span>
          <br />
          {props.description}
        </Description>
      </Content>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 350px;
  object-fit: cover;
`;

const Wrap = styled.div`
  width: 100%;
  height: 300px;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const Content = styled.div`
  margin: 5px;
  font-family: "Rubik", sans-serif;
  color: white;
`;
const ButtonComponent = styled.div`
  button {
    border-radius: 5px;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  }

  #one {
    width: 85%;
    height: 40px;
    margin-right: 5px;
    background-color: rgba(100, 150, 255, 1);
  }

  #two {
    width: 12%;
    height: 40px;
    background-color: rgba(100, 130, 130, 0.6);
  }
`;
const Date = styled.small`
  color: gray;
`;
const Description = styled.div`
  color: rgb(170, 180, 90);
`;
