import React, { useContext } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  Autocomplete,
  InfoWindow,
} from "@react-google-maps/api";
import { Context } from "../store/appContext";

const center = {
  lat: 39,
  lng: -3,
};

const locations = [
  {
    lat: 39,
    lng: -3,
  },
];

const onLoad = () => {};
const onPlaceChanged = () => {};

function MyComponent() {
  const { store, actions } = useContext(Context);

  return (
    <LoadScript googleMapsApiKey="AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg">
      <GoogleMap
        mapContainerStyle={{
          width: "auto",
          height: "60vh",
        }}
        center={center}
        zoom={10}
      >
        {!store.loggedIn ? (
          <Marker label="Regístrese para ver talleres cercanos" position={locations[0]} />
        ) : (
          locations.map((e) => <Marker label="Taller Paco" position={e} />)
        )}
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyComponent);
