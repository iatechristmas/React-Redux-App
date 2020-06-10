import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_CHARACTERS = "UPDATE_CHRACTERS";
export const SET_ERROR = "SET_ERROR";

export const getData = () => (dispatch) => {
  dispatch({ type: FETCH_DATA });
  setTimeout(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then((res) => {
        console.log(res);
        dispatch({ type: UPDATE_CHARACTERS, payload: res.data.results });
      })
      .catch((err) => {
        console.error("error fetching data from api. err: ", err);
        dispatch({ type: SET_ERROR, payload: "error fetching data from api" });
      });
  }, 2000);
};
