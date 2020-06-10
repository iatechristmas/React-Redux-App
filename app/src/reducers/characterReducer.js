import { FETCH_DATA, UPDATE_CHARACTERS, SET_ERROR } from "../actions/index";

const initialState = {
  characters: [],
  isFetchingData: false,
  error: "",
};

export const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isFetchingData: true,
        missions: [],
      };
    case UPDATE_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
        isFetchingData: false,
      };
    case SET_ERROR:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
