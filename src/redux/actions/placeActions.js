import { ActionTypes } from "../constants/action-types";

export const setPlaces = (places) => {
  return {
    type: ActionTypes.SET_PLACES,
    payload: places,
  };
};

export const selectedPlace = (places) => {
  return {
    type: ActionTypes.SELECTED_PLACE,
    payload: places,
  };
};
