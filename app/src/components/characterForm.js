import React, { useState } from "react";
import { connect } from "react-redux";
import { getData } from "../actions";
import styled, { keyframes } from "styled-components";
import balls from "../assets/balls.mp3";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  @import url("https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap");
  font-family: "Amatic SC", cursive;
  font-size: 2rem;
  text-shadow: 1px 1px 5px #fff;
  color: #8ffd44;
  border-radius: 10px;
  margin-top: 2rem;
`;

const StyledButton = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap");
  font-family: "Amatic SC", cursive;
  color: #443e3e;
  font-size: 2rem;
  text-shadow: 1px 1px 5px #fff;
  background-color: #8ffd44;
  border-radius: 10px;
`;

const CharacterForm = (props) => {
  const audio = new Audio(balls);

  const start = () => {
    audio.play();
  };

  const handleGetData = (e) => {
    e.preventDefault();
    start();
    props.getData();
  };

  return (
    <>
      {props.isFetchingData ? (
        <Rotate>**GETTING SCHWIFTY**</Rotate>
      ) : (
        <div>
          <p></p>
          <StyledButton onClick={handleGetData}>Get Schwifty</StyledButton>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetchingData: state.isFetchingData,
  };
};

export default connect(mapStateToProps, { getData })(CharacterForm);
