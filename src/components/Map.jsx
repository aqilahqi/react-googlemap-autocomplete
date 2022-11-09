import { GoogleMap, MarkerF } from "@react-google-maps/api";
import { useSelector } from "react-redux";

const Map = ({ center, zoom }) => {
  const selectedPlace = useSelector((state) => state.allPlaces.selectedPlace);
  const { lat, lng, address } = selectedPlace;

  return (
    <div className="map">
      <p>Start typing and google with suggest a list of locations. Your selected location will be saved in a list below.</p>
      <br />
      <GoogleMap zoom={!lat ? zoom : 18} center={!lat ? center : { lat, lng }}>
        <MarkerF position={!lat ? center : { lat, lng }} />
      </GoogleMap>
      {address ? (
        <p
          style={{ marginTop: "0.6rem", fontStyle: "italic", fontSize: "12px" }}
        >
          {address}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 3.0776995,
    lng: 101.4839079,
  },
  zoom: 15,
};

export default Map;
