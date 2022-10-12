import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { Select } from "antd";
import React, { useState } from "react";

const { Option } = Select;

const SearchBox = () => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
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
      console.log("onSearch", data);
    }
  };

  const onChange = (data) => {
    setValue(data);
    console.log("onChange", data);
  };

  return (
    <Select
      placeholder="Select a person"
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
    >
      {options}
    </Select>
  );
};

export default SearchBox;
