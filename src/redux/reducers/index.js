import { combineReducers } from "redux";
import { placeReducer } from "./placeReducer";

const reducers = combineReducers({
  allPlaces: placeReducer,
});

export default reducers;
