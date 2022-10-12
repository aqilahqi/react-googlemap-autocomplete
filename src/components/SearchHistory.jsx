import React from "react";
import { Divider, List, Typography } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { selectedPlace } from "../redux/actions/placeActions";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

const SearchHistory = () => {
  const places = useSelector((state) => state.allPlaces.places);
  const dispatch = useDispatch();

  const renderMap = async (address) => {
    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    dispatch(selectedPlace({ lat, lng }));
  };

  return (
    <div className="search-history-wrapper">
      <List
        size="large"
        header={<h4>Search history</h4>}
        bordered
        dataSource={places}
        renderItem={(place) => (
          <List.Item>
            <a onClick={() => renderMap(place)}>{place}</a>
          </List.Item>
        )}
      />
    </div>
  );
};

export default SearchHistory;
