import usePlacesAutocomplete from "use-places-autocomplete";
import { Input } from "antd";
import { setPlaces, selectedPlace } from "../redux/actions/placeActions";
import { useDispatch } from "react-redux";
import useOnclickOutside from "react-cool-onclickoutside";

const SearchBox = () => {
  const dispatch = useDispatch();

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    debounce: 500,
  });

  const ref = useOnclickOutside(() => {
    clearSuggestions();
  });

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }) =>
    () => {
      setValue(description, false);
      clearSuggestions();

      dispatch(setPlaces(description));
      dispatch(selectedPlace(description));
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li key={place_id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  return (
    <div ref={ref} className="searchinput-wrapper">
      <h4 style={{ marginBottom: "0.6rem" }}>Search a new location</h4>
      <Input value={value} onChange={handleInput} disabled={!ready} />
      {status === "OK" && (
        <ul className="listWrapper">{renderSuggestions()}</ul>
      )}
    </div>
  );
};

export default SearchBox;
