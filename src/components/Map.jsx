import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { useSelector } from "react-redux";

const Map = ({ center, zoom }) => {
  const selectedPlace = useSelector((state) => state.allPlaces.selectedPlace);
  const { lat, lng } = selectedPlace;
  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: import.meta.env.VITE_APP_GMAP_API_KEY,
  // });

  // if (!isLoaded) return <div>Loading...</div>;
  return (
    <div className="map">
      <h2>Hello hiring team!</h2>
      <p>Thank you for your time in reviewing my assessment 🤩 </p>
      <br />
      <GoogleMap zoom={!lat ? zoom : 18} center={!lat ? center : { lat, lng }}>
        <MarkerF position={!lat ? center : { lat, lng }} />
      </GoogleMap>
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
