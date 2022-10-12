import { ActionTypes } from "../constants/action-types";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

export const setPlaces = (places) => {
  return {
    type: ActionTypes.SET_PLACES,
    payload: places,
  };
};

export const selectedPlace = (address) => async (dispatch) => {
  const results = await getGeocode({ address });
  const { lat, lng } = await getLatLng(results[0]);

  dispatch({ type: ActionTypes.SELECTED_PLACE, payload: { lat, lng } });
};
