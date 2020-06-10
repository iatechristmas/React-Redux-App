import React from "react";
import logo from "./logo.svg";
import "./App.css";

import styled from "styled-components";

import CharacterList from "./components/characterList";
import CharacterForm from "./components/characterForm";

const StyledTitle = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap");
  font-family: "Amatic SC", cursive;
  color: #443e3e;
  font-size: 4rem;
  text-shadow: 1px 1px 5px #fff;
  background-color: #8ffd44;
  border-radius: 10px;
  padding: 2%;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StyledTitle>Show Me What You Got</StyledTitle>
        <CharacterForm />
        <CharacterList />
      </header>
    </div>
  );
}

export default App;
