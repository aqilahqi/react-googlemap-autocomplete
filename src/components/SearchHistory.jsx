import React from "react";
import { List } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { selectedPlace } from "../redux/actions/placeActions";

const SearchHistory = () => {
  const places = useSelector((state) => state.allPlaces.places);
  const dispatch = useDispatch();

  const renderMap = (address) => {
    dispatch(selectedPlace(address));
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
