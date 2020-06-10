import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions";

const CharacterForm = (props) => {
  const handleGetData = (e) => {
    e.preventDefault();
    props.getData();
  };

  return (
    <>
      {props.isFetchingData ? (
        <div>**FETCHING DATA**</div>
      ) : (
        <button onClick={handleGetData}>Get Schwifty</button>
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
