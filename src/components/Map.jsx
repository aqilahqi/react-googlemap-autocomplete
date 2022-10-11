import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Map = ({ center, zoom }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_APP_GMAP_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div className="map">
      <GoogleMap zoom={zoom} center={center}>
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
};

export default Map;
