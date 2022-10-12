import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { Select, Spin } from "antd";
import React, { useState } from "react";
import { setPlaces, selectedPlace } from "../redux/actions/placeActions";
import { useDispatch } from "react-redux";

const { Option } = Select;

const SearchBox = () => {
  const dispatch = useDispatch();
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data, loading },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const [options, setOptions] = useState([]);

  const onSearch = (newValue) => {
    if (newValue) {
      setValue(newValue);
      status === "OK" &&
        setOptions(
          data.map((d) => (
            <Option key={d.place_id} value={d.description}>
              {d.description}
            </Option>
          ))
        );
    }
  };

  const onChange = (address) => {
    setValue(address, false);
    clearSuggestions();
    dispatch(setPlaces(address));
    dispatch(selectedPlace(address));
  };

  return (
    <div className="searchbox-wrapper">
      <h4 className="input-label">Search for a new location</h4>
      <Select
        placeholder="Search a location.."
        showSearch
        value={value}
        searchValue={value}
        defaultActiveFirstOption={false}
        showArrow={false}
        filterOption={false}
        onChange={onChange}
        onSearch={onSearch}
        notFoundContent={null}
        style={{ width: "100%" }}
        disabled={!ready}
        loading={loading}
      >
        {options}
      </Select>
    </div>
  );
};

export default SearchBox;
