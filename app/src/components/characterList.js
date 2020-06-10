import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getData } from "../actions";
import styled from "styled-components";

const OutsideDiv = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap');
  display: flex;
  flex-flow: wrap;
  margin: auto;
  padding: 5%; */
  width: 50%;
  font-family: 'Amatic SC', cursive;
`;

const InsideDiv = styled.div`
  background-color: white;
  padding: 1%;
  margin: 1%;
  width: 20%;
  border: 2px solid #8ffd44;
  border-radius: 8px;
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  font-weight: bold;
  font-size: 2rem;
  -webkit-text-stroke: 0.2px #8ffd44;
  img {
    height: auto;
    width: 100%;
    border: 3px solid #8ffd44;
    border-radius: 8px;
  }
  h2 {
    border-radius: 8px;
    background-color: #8ffd44;
  }
  p {
    border-radius: 8px;
    background-color: #8ffd44;
  }
`;

const CharacterList = (props) => {
  useEffect(() => {
    props.getData();
  }, []);

  return (
    <OutsideDiv>
      {props.error ? (
        <div>error</div>
      ) : (
        props.characters.map((character) => (
          <InsideDiv>
            <h2>{character.name}</h2>
            <img src={character.image} alt="" />
            <p>Gender: {character.gender}</p>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Location: {character.location.name}</p>
          </InsideDiv>
        ))
      )}
    </OutsideDiv>
  );
};

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getData })(CharacterList);
