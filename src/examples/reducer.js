import React from "react";

export const ADD_TO_READING_LIST = "ADD_TO_READING_LIST";
export const REMOVE_FROM_READING_LIST = "REMOVE_FROM_READING_LIST";

const initialState = [
  "A thousand Splendid Suns",
  "The Kite Runner",
  "Enjoy your life",
  "Complex PTSD - From Surviving to thriving!",
  "Soft Skills",
  "Redux in Action",
  "The Clean Coder",
];

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_READING_LIST:
      return { ...state, readingList: [...state.readingList, payload] };
    case REMOVE_FROM_READING_LIST:
      return {
        ...state,
        readingList: state.readingList.filter((b) => b !== payload),
      };
    default:
      return state;
  }
};

export default reducer;
