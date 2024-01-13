import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = (props) => {
  return (
    <CardWrapper>
      <Wrap to={`../details/${props.id}`}>
        <img src={props.imageUrl} alt="poster" />
      </Wrap>
      <Content>
        <ButtonComponent>
          <Link to={`../details/${props.id}`}>
            <button id="one">Watch Now</button>
          </Link>
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
  position: relative;
`;

const Wrap = styled(Link)`
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
  font-weight: 300;
  font-style: italic;
`;
