import { ActionTypes } from "../constants/action-types";

const initialState = {
  places: [],
  selectedPlace: [],
};

export const placeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PLACES:
      return { ...state, places: state.places.concat(payload) };
    case ActionTypes.SELECTED_PLACE:
      return { ...state, selectedPlace: payload };
    default:
      return state;
  }
};
